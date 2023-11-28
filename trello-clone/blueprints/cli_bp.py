from flask import Blueprint
from datetime import date
from setup import db, bcrypt
from models.user import User
from models.card import Card

db_commands = Blueprint('db', __name__)

@db_commands.cli.command('create')
def db_create(): #have to work in context of flask app
    db.drop_all() #drop and recreate
    db.create_all()
    print('Created tables')

@db_commands.cli.command('seed')
def db_seed():
    users = [
        User(
            email='admin@spam.com',
            password=bcrypt.generate_password_hash('spinynorman').decode('utf8'),
            is_admin=True
        ),
        User(
            name='John Cleese',
            email='cleese@spam.com',
            password=bcrypt.generate_password_hash('spinynorman').decode('utf8')
        )
    ]
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
    db.session.add_all(users)
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