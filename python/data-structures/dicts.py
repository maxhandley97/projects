my_dog = {'name': 'Ted', 'age': 15, 'breed': 'Border Collie'}
my_dog['age'] = 16
my_dog['owner'] = 'Matt'
# dogs = [my_dog, {'name': 'John', 'age': 12, 'breed': 'dachshund'}]

# for item in my_dog:
#     print(my_dog.get(item))

for k, v in my_dog.items():
    print(k)

# for x in my_dog.keys():
#     print(x)

# print(my_dog.get('state', 'Unknown'))