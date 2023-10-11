spam = ['dog','cat', 'bird' ] # will concatinate if print(spam + eggs)
eggs = [12, 78, 100, 54, 42]
foo = ['Matt', 26, 180]
tic_tac_toe = [['','o',''],
               ['x','o',''],
               ['o','x','']
               ]

spam.insert(1, 'kangaroo')

# def display_person(person):
#     # # same thing as line below
#     # name = person[0]
#     # age = person[1]
#     # height = person[2]
#     name, age, height = person
#     print(f'{name} is {age} years old and {height}cm tall')


# # add to list
# spam.append('kangaroo')

# # to access list items seperately
# for index in range(len(spam)):
#     print(spam[index])

# # other option DRYer

for animal in spam:
    print(animal)

# #for numbered list:
# index = 1
# for animal in spam:
#     print(f'{index}.{animal}')
#     index += 1


# # DRYer for numbered list:
# for index, animal in enumerate(spam):
#     print(f'{index + 1}.{animal}')

# # print length of spam
# print(len(spam))

# # modify spam
# spam[1] = 'hello'
# print(spam)



