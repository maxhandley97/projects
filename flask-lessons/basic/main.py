from flask import Flask, request

app = Flask(__name__) #instance of Flask app


@app.route('/') #run route
def index():
    return '<h3>{message}</h3>'

@app.route('/spam')
def spam():
    person = { 'name': 'John', 'age': '16' }
    return person, 201 #status code added to ensure 

@app.route('/hello/<name>') #<variable> now interpreted as restful parameter
def hello(name):
    # name = request.args.get('name')
    # name = 'Jack'
    return { 'message': f'Hello, {name}!'}

@app.route('/add/<int:num1>/<int:num2>')
def add(num1, num2):
    return {'error': 'num1 and num2 must be integers'}, 400

@app.errorhandler(TypeError)
def type_error(error):
    return { 'error': error}, 400


@app.errorhandler(404)
def not_found(error): #abritrary can be called anything
    return {'error': str(error)}, 404 

if __name__ == '__main__':
    app.run(debug=True, port=5555) #runs app on local dev server