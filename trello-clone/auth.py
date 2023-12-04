from flask import Flask, request, abort
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import get_jwt_identity 
from setup import db
from blueprints.users_bp import User

def authorize(user_id=None):
    jwt_user_id = get_jwt_identity()
    stmt = db.select(User).filter_by(id=jwt_user_id)
    user = db.session.scalar(stmt)
    # if its not the case that the user is an admin or user_id is truthy and matches the token
    # i.e if user_id isn"t passed in, they must be admin
    if not (user.is_admin or (jwt_user_id and user_id == user_id)):
        abort(401)