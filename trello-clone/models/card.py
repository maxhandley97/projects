from setup import db, ma
from datetime import datetime

class Card(db.Model): #extends db.model
    __tablename__ = 'cards' #dunder to name table, default is singular card
    
    id = db.Column(db.Integer, primary_key=True) #sqlalchemy sets up autokey
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(db.String(30), default='To Do')
    date_created = db.Column(db.Date, default = datetime.now().strftime("%Y-%m-%d"))


class CardSchema(ma.Schema): #serialise card schema
    class Meta:
        fields = ('id', 'title', 'description', 'status', 'date_created')
