# shopping_list = []
# with open('shopping.txt') as f:
#     data = f.read()
#     shopping_list = data.split('\n')
#     ## other way
#     # for line in f:
#     #     shopping_list.append(line.strip())

# print(shopping_list)

# # f = open('shopping.txt') ##method to get .txt
# # data = f.readline()
# # f.close()
# # print(data)

# shows = [
#     'The Mandalorian',
#     'The Witcher',
#     'The X Files'
# ]

# with open('tv-shows.txt', 'w') as f:
#     # f.write('\n'.join(shows)) #two ways to do it < + v

#     for i, s in enumerate(shows):
#         f.write(f'{i + 1}. {s}\n')
    

item = input('What do you need to buy? ')
with open('shopping.txt', 'a') as f:
    f.write(f'\n{item}')