ccnum = (input("what is your credit card number, with no spaces? "))
if ccnum[0] == "4": 
    if len(ccnum) == 13 or 16:
        print("your bank number is " + ccnum[1:6] + "and your account number is " + ccnum[6:-1])
else:
    print("invalid Visa Card number")

# card_num = (input("Enter your card number: "))

# if card_num[0] == "4":
#     if len(card_num) == 13 or 16:
#         print(f"Your bank number is {card_num[1:7]}")
#         print(f"Your acount number is {card_num[7:-1]}")
# else:
#     print("This card is not a valid card number")

card_number = input("Please enter your card number with no spaces: ")

if card_number[0] == str(4):
    if len(card_number) == 13 or len(card_number) == 16:
        print(f"This is a valid Visa card. Your bank number is: {
              card_number[1:6]}. Your Account Number is: {card_number[6:-1]}.")
    else:
        print(f"This is an invalid Visa card number.")
else:
    print(f"This is not a Visa Card.")