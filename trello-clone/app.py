#create a token and ensure token in request header/ get jwt looks in header, gets token, decodes it, pulls out sub and returns it
from setup import app
from blueprints.cli_bp import db_commands
from blueprints.users_bp import users_bp
from blueprints.cards_bp import cards_bp

app.register_blueprint(db_commands)
app.register_blueprint(users_bp)
app.register_blueprint(cards_bp)

#so basically flask allows us to create route that can be access by clients and then 
# flask sqlalchemy + marshmallow allows us to create object out of our database to manipulate and then convert it to json so that the data can be transmitted via the routes and therefore that's the transition of data ?