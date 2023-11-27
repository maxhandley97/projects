from flask import Flask, request, abort
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import jwt_required, get_jwt_identity #create a token and ensure token in request header/ get jwt looks in header, gets token, decodes it, pulls out sub and returns it
from setup import *
from models.user import User, UserSchema
from models.card import Card, CardSchema
from blueprints.cli_bp import db_commands
from blueprints.users_bp import users_bp


def admin_required():
    user_email = get_jwt_identity()
    stmt = db.select(User).filter_by(email=user_email)
    user = db.session.scalar(stmt)
    if not (user.is_admin and user):
        abort(401)

@app.errorhandler(401)
def unauthorized(err):
    return {'error': 'you are not authorized to access this resource'}


app.register_blueprint(db_commands)
app.register_blueprint(users_bp)


# @app.cli.command('all_cards')
# def all_cards(): #by default SQLALchemy method will do *, comma seperate to stack
#     stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc) # parse in class, by association knows table
#     # print(stmt) #good for debugging quieries
#     cards = db.session.scalars(stmt) #need to execute, scalars gets list of objects
#     # print(cards.all()) #method to convert results to list
#     for card in cards:
#         print(card.__dict__) 
    

@app.route('/users/<userId>', methods=['PATCH'])
def update_user(userId):
    #Parse incoming POST body through schema
    user = User.query.get(userId)
    #create new user with parsed data
    user.name = request.json.get('name')

    db.session.commit()
    # print(request.json) - used for 
    # print(user.__dict__)
    # return 'ok', 201
    return UserSchema(exclude=['password']).dump(user), 201 #return the new user


@app.route('/users/<userId>', methods=['DELETE'])
def delete_user(userId):
    #Parse incoming POST body through schema
    #Parse incoming POST body through schema
    User.query.filter_by(id=userId).delete()
   
    db.session.commit()

    return "Success", 201 #return the n
    # print(request.json) - used for 


@app.route('/cards')
@jwt_required()
def all_cards():
    # admin_required()
    #1 get token from user instance,
   
    # select * from cards in stmt variable to ;
    # stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc()) #create statement sql
    stmt = db.select(Card)
    cards = db.session.scalars(stmt).all() #execute method, scalars to have singular objects/model instances
    return CardSchema(many=True).dump(cards) #flask takes care of serialisation

@app.route('/')
def index():
    return 'Hello, world'
@app.errorhandler(IntegrityError)
def integrity_error(err):
    return {'error': str(err)}, 409
#so basically flask allows us to create route that can be access by clients and then 
# flask sqlalchemy + marshmallow allows us to create object out of our database to manipulate and then convert it to json so that the data can be transmitted via the routes and therefore that's the transition of data ?