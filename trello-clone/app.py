from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import date
import json
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:spameggs123@127.0.0.1:5432/trello' #database connection string

db = SQLAlchemy(app) #connects two
ma = Marshmallow(app) 

class Card(db.Model): #extends db.model
    __tablename__ = 'cards' #dunder to name table, default is singular card
    
    id = db.Column(db.Integer, primary_key=True) #sqlalchemy sets up autokey
    title = db.Column(db.String(100))
    description = db.Column(db.Text())
    status = db.Column(db.String(30))
    date_created = db.Column(db.Date())




class CardSchema(ma.Schema): #serialise card schema
    class Meta:
        fields = ('id', 'title', 'description', 'status', 'data_created')

@app.cli.command('db_create')
def db_create(): #have to work in context of flask app
    db.drop_all() #drop and recreate
    db.create_all()
    print('Created tables')

@app.cli.command('db_seed')
def db_seed():
    cards = [
    Card(
        title = 'Start the project',
        description = 'Stage 1 - Create ERD',
        status ='Done',
        date_created = date.today()
    ),
    Card(
        title = 'ORM Queries',
        description = 'Stage 2 - Implement CRUD queries',
        status ='In progress',
        date_created = date.today()
    ),
    Card(
        title = 'Marshmallow',
        description = 'Stage 3 - Implement JSONify of models',
        status ='In progress',
        date_created = date.today()
    )]

    db.session.add_all(cards)
    db.session.commit()

    print('Database seeded')

# @app.cli.command('all_cards')
# def all_cards(): #by default SQLALchemy method will do *, comma seperate to stack
#     stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc) # parse in class, by association knows table
#     # print(stmt) #good for debugging quieries
#     cards = db.session.scalars(stmt) #need to execute, scalars gets list of objects
#     # print(cards.all()) #method to convert results to list
#     for card in cards:
#         print(card.__dict__) 
    

@app.route('/cards')
def all_cards():
    # select * from cards;
    stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc())
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)

@app.route('/')
def index():
    return 'Hello, world'
