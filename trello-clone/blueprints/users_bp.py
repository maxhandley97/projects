from flask import Blueprint, request
from models.user import User, UserSchema
from setup import db, bcrypt
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import create_access_token
from datetime import timedelta

users_bp = Blueprint('users', __name__, url_prefix='/users')

@users_bp.route('/register', methods=['POST'])
def register():
    try:
        #Parse incoming POST body through schema
        user_info = UserSchema(exclude=['id', 'is_admin']).load(request.json)
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

@users_bp.route('/login', methods=['POST'])
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
        return {'status': 'successful login', 'token': token, 'user': UserSchema(exclude=['password']).dump(user)}
    else:
        return {'error': 'Invalid email or password'}, 401
    print(user)
    #3. Check the password hash
    #4. Create JWT Token
    #5. Return the token
    return 'ok'
@users_bp.route('/users/<userId>', methods=['PATCH'])
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


@users_bp.route('/users/<userId>', methods=['DELETE'])
def delete_user(userId):
    #Parse incoming POST body through schema
    #Parse incoming POST body through schema
    User.query.filter_by(id=userId).delete()
   
    db.session.commit()

    return "Success", 201 #return the n
    # print(request.json) - used for 