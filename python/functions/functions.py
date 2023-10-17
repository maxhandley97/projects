# def hello(name, age=26):
#     print(f'Hello {name}! you are {age} years old')

# def goodbye():
#     print('Goodbye!')

# x = input('Enter your name ')
# goodbye()
# hello(name=x)



# Constants have CAPITALS
# TAXI_RATE = 0.1
# FLAT_SHIPPING = 10

# def add_tax(amount):
#     return amount * (1 + TAXI_RATE)

# def add_shipping(amount):
#     return amount + FLAT_SHIPPING

# def calc_grand_total(amount):
#     return add_tax(add_shipping(amount))

# # MAIN
# subtotal = float(input('Subtotal: $'))
# grand_total = calc_grand_total(subtotal)
# print(f'Total: ${grand_total:.2f}')

# def calc_frame(ball1, ball2, ball3):
#     if ball1 == 10 or ball1 + ball2 == 10: #strike or spare
#         return ball1 + ball2 + ball3
#     else: return ball1 + ball2
    #if strike, return 10 + ball2 + ball3
    #if spare, return 10 + ball3
    #simplest scenario, not strike or spare

# def calc_frame(x, y, z):
#     if (x+y) < 10:
#         result = x + y
#     else:
#         result = x + y + z
#     return result
# #main
# x = int(input("Enter roll 1: "))
# y = int(input("Enter roll 2: "))
# z = int(input("Enter roll 3: "))
# print(calc_frame(x, y, z))

# def dis(price: int, discount: int) -> float:
# 	total_discout = round(price * (1 - discount / 100), 2)
# 	return total_discout
# price = int(input("Enter price "))
# discount = int(input("Enter discount "))
# x = float(dis(price, discount))
# print(x)

# print(calc_frame(6, 2, 9))
# print(calc_frame(10, 6, 2))    # 18
# print(calc_frame(7, 3, 4))     # 14
# print(calc_frame(0, 10, 5))    # 15
# print(calc_frame(5, 0, 10))    # 5

arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]
i = 0
while (i<arr.len() -1) and (arr[i] < arr [i+1]):
    i += i
    arr[i] = arr[i+1]
    arr[i+1] = arr[i]
print(i)


