# x = int(input('What is X? '))
# y = int(input('What is Y? '))

# if x < y:
#     print('x is less that y') 
# elif x > y: #else if
#     print('x is greater than y')
# else:
#     print('x is equal to y')



# score = int(input('Score: '))

# if score >= 90:
#     print('HD')
# elif score >= 80:
#     print('D')
# elif score >= 70:
#     print('CR')
# elif score >= 50:
#     print('P')
# else:
#     print('F')


# name = input('What is your name? ')

# match name:
#     case 'Harry' | 'Ron' | 'Hermione':
#         print('Gryffindor')
#     case 'Draco':
#         print('Slytherin')
#     case _:
#         print('Mudblood!')

# shape = input('Choose to calculate one of the following shapes; triangle, square or circle: ')
# if shape == 'triangle':
#     height = int(input('What is your height '))
#     width = int(input('What is your width '))
#     print('the area of your triangle is ' + str(int(width * height * .5)))
# elif shape == 'square':
#     length = int(input('What is the length/width of your square '))
#     print('the area of your square is ' + str(int(length * 2)))
# elif shape == 'circle':
#     diameter = int(input('What is the Diameter of your circle '))
#     print('the area of your circle is ' + str(int(diameter / 2) ** 2))
# else:
#     print("not a valid shape")

# import math
# shape = input('What is the shape that you wish to calculate: triangle, square or circle? ')

# match shape:
#     case 'square':
#         length = int(input('What is the length/width of the square? '))
#         print (f'The surface area of your square is {length * 2}')
#     case 'circle':
#         diameter = int(input('What is the Diameter of the circle? '))
#         print (f'The surface area of your circle is {(diameter / 2) **2}')
#     case 'triangle':
#         height = int(input('What is the height of the triangle? '))
#         width = int(input('What is the width of your triangle? '))
#         print (f'The area of your triangle is {int(height * width * .5)}')
#     case _:
#         print ('not valid shape')

ccnum = (input("what is your credit card number, with no spaces? "))
if ccnum[0] == "4": 
    if len(ccnum) == 13 or 16:
        print("your bank number is " + ccnum[1:6] + "and your account number is " + ccnum[6:-1])
else:
    print("invalid Visa Card number")

              