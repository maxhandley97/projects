from flask import Blueprint, request, abort
from flask_jwt_extended import jwt_required
from setup import db
from models.card import CardSchema, Card
from auth import admin_required
from datetime import datetime

cards_bp = Blueprint('cards', __name__, url_prefix='/cards')

@cards_bp.route('/')
@jwt_required()
def all_cards():
    admin_required()
    # select * from cards in stmt variable to ;
    # stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc()) #create statement sql
    stmt = db.select(Card)
    cards = db.session.scalars(stmt).all() #execute method, scalars to have singular objects/model instances
    return CardSchema(many=True).dump(cards) #flask takes care of serialisation

# @cards_bp.route("/<int:id>")
# @jwt_required
# def one_card(id):
#     stmt = db.select(Card).filter_by(id=id) # if .where(card.id == id)
#     card = db.session.scalar(stmt) #execute method, scalars to have singular objects/model instances
#     if card:
#         return CardSchema().dump(card)
    
@cards_bp.route("/<int:id>")
@jwt_required()
def one_card(id):
    stmt = db.select(Card).filter_by(id=id)
    card = db.session.scalar(stmt)
    if card:
        return CardSchema().dump(card)
    else:
        # Handle the case where the card with the specified ID is not found
        return {"error": "Card not found"}, 404

#create a new Card
@cards_bp.route("/", methods=["POST"])
# @jwt_required()
def create_card():
    card_info = CardSchema(exclude=['id', 'date_created']).load(request.json)
    card = Card(
        title=card_info['title'],
        description=card_info.get('description', ''), #get sets default after
        status=card_info.get('status', 'To do')
    )
    db.session.add(card)
    db.session.commit()
    return CardSchema().dump(card), 201


@cards_bp.route("/<int:id>", methods=["PUT","PATCH"])
# @jwt_required()
def update_card(id):
    card_info = CardSchema(exclude=['id', 'date_created']).load(request.json)
    stmt = db.select(Card).filter_by(id=id)
    card = db.session.scalar(stmt)
    if card:
        card.title = card_info.get('title', card.title) #remains unchanged if 'title' is not specified
        card.description = card_info.get('description', card.description)
        card.status = card_info.get('status', card.status)
        db.session.add(card)
        db.session.commit()
        return CardSchema().dump(card)
    else:
        # Handle the case where the card with the specified ID is not found
        return {"error": "Card not found"}, 404

@cards_bp.route("/<int:id>", methods=["DELETE"])
# @jwt_required()
def delete_card(id):
    admin_required()
    stmt = db.select(Card).filter_by(id=id)
    card = db.session.scalar(stmt)
    if card:
        db.session.delete(card)
        db.session.commit()
        return {"success": "Card deleted"}
    else:
        # Handle the case where the card with the specified ID is not found
        return {"error": "Card not found"}, 404

    


