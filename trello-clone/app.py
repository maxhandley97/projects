from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import date
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import JWTManager, create_access_token #make sure valid token is parsed through with request
from datetime import timedelta

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'Ministry of Silly Walks'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:spameggs123@127.0.0.1:5432/trello' #database connection string
# avoid depreciation warning
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app) #connects two
ma = Marshmallow(app) 
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

class Card(db.Model): #extends db.model
    __tablename__ = 'cards' #dunder to name table, default is singular card
    
    id = db.Column(db.Integer, primary_key=True) #sqlalchemy sets up autokey
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    status = db.Column(db.String(30))
    date_created = db.Column(db.Date)


class CardSchema(ma.Schema): #serialise card schema
    class Meta:
        fields = ('id', 'title', 'description', 'status', 'date_created')

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'email', 'password', 'is_admin')

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

@app.cli.command('db_create')
def db_create(): #have to work in context of flask app
    db.drop_all() #drop and recreate
    db.create_all()
    print('Created tables')

@app.cli.command('db_seed')
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
    
@app.route('/users/register', methods=['POST'])
def register():
    try:
        #Parse incoming POST body through schema
        user_info = UserSchema(exclude=['id']).load(request.json)
        #create new user with parsed data
        user = User(
            email=user_info['email'],
            password=bcrypt.generate_password_hash(user_info['password']).decode('utf8'),
            name=user_info.get('name', '')
        )
        db.session.add(user) #add and commmit new user to the database
        db.session.commit()
        # print(request.json) - used for 
        # print(user.__dict__)
        # return 'ok', 201
        return UserSchema(exclude=['password']).dump(user), 201 #return the new user, dump instead of dumps because the header will 
    except IntegrityError:
        return {'error': 'Email address already in use'}, 409

@app.route('/users/login', methods=['POST'])
def login():
    #1. parse incoming POST body through the schema
    user_info = UserSchema(exclude=['id', 'name', 'is_admin']).load(request.json)
    #2. select user from db, with email that matches the one in the post body, can print these steps to debug
    stmt = db.select(User).where(User.email == user_info['email'])
    user = db.session.scalar(stmt)
    #3. Check the password hash
    if user and bcrypt.check_password_hash(user.password, user_info['password']): #method of bcrypt, checks hash password in db and user made posswor
        #4. Create JWT Token
        token = create_access_token(identity=user.email, expires_delta=timedelta(hours=2))
        return {'token': token, 'user': UserSchema(exclude=['password']).dump(user)}
    else:
        return {'error': 'Invalid email or password'}, 401
    print(user)
    #3. Check the password hash
    #4. Create JWT Token
    #5. Return the token
    return 'ok'

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
def all_cards():
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