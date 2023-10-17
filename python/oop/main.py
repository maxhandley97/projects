import dog

dog1 = dog.Dog('Ted', 15) # created instance of class by calling it
# dog1.name = 'Ted' # created new attribute

dog2 = dog.Dog('Loki', 3)

print(dog1.greet("hello"))
print(f'dog2: {dog2.__dict__}')
# dog1.greet("Goodbye") # goodbye = prefix from dog.py
# dog2.greet()

















# dog1 = dog.create('Ted', 15, 'Border Collie')
# dog2 = dog.create('Loki', 3, 'Border Collie')

# # del dog1['name']
# dog.walk(dog1)
# dog.walk(dog2)
# dog.walk(dog2)

# print(dog1)
# print(dog2)