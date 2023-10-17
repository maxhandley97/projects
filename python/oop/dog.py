# my_dog = {'name': 'Ted', 'age': 15, 'breed': 'Border Collie'}

class Dog:
    def __init__(self, _name, _age):
        self.name = _name # add attrubte within 
        self.age = _age 
        
    def greet(self, prefix):
        # print(f'self: {self}')
        print(f'{prefix}, {self.name}')


 
# def create(name, age, breed):
#     new_dog = {
#         'name': name,
#         'age': age,
#         'breed': breed
#         'walks': 0
#     }
#     return new_dog

# def walk(dog):
#     dog['walks'] += 1