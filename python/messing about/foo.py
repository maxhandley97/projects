response = input('Do you like cats? (y/n):')
type_of_cats = ""
type_of_dogs = ""
if response == 'y':
    type_of_cats = input('What type of cat do you like? Tabyy, black')
    print (f'The user likes cats {type_of_cats}')
else:
    alt_response = input("dop you like dogs? (y/n):")
    if alt_response == 'y':
        type_of_dogs = input('What type of cat do you like? heeler, rotweiler')
        print (f'The user likes dogs {type_of_dogs}')


  