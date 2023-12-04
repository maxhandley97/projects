from setup import db, ma
from marshmallow import fields
from datetime import datetime

class Comment(db.Model): #extends db.model
    __tablename__ = "comments" #dunder to name table, default is singular card
    
    id = db.Column(db.Integer, primary_key=True) #sqlalchemy sets up autokey

    message = db.Column(db.Text, nullable=False)

    #establishes a foreign key relationship at database level
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False) #users is table name allocated by dunder
    #sqlalchemy relationship method, class representing model = User, creating instance, relationship between Card and User models
    user = db.relationship("User", back_populates="comments") #back links this relationship, must have for nested objects
    
    card_id = db.Column(db.Integer, db.ForeignKey("cards.id"), nullable=False)
    card = db.relationship("Card", back_populates="comments")

class CommentSchema(ma.Schema): #serialise card schema
    #tell marsh to nest a UserSchema instance when serialzing
    user = fields.Nested('UserSchema', only=['id', 'name'])
    card = fields.Nested('CardSchema', only=['id', 'title'])


    class Meta:
        fields = ("id", "message", "user", "card")