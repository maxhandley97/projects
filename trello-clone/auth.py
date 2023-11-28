from flask import Flask, request, abort
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import get_jwt_identity 
from setup import db
from blueprints.users_bp import User

def admin_required():
    user_email = get_jwt_identity()
    stmt = db.select(User).filter_by(email=user_email)
    user = db.session.scalar(stmt)
    if not (user.is_admin and user):
        abort(401)