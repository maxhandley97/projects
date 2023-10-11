# spam = 0
# while spam < 5:
#     print('spam')
#     spam += 1 # spam = spam + 1
# print('done')


# for spam in range(1, 11, 2):
#     print(f'Hello {spam}')


# for _ in range(5):
#     print(f'Hello')


import random
# count = int(input('How many random intergers? '))
# for i in range(count):
#     print(random.randint(1, 100))

import random
def roll_die(sides):
    # pick random interger between 1 and 6
    # return value
    return random.randint(1, sides)
def roll(roll_string):
    rolls = []
    # splits up role string into num_dice and sides
    parts = roll_string.split('d')
    num_dice = int(parts[0])
    sides = int(parts[1])
    # roll num_dice dice and put each result in a list
    for die in range(num_dice):
        result = roll_die(sides)
    # add result to list
        rolls.append(result)
    # Return list of rolls
    return rolls
print(roll(2, 12))




# num_of_rolls = int(input('How many times do you want to roll? '))
# dice_faces = int(input('How many faces does your die have? ' ))
