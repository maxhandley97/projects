
def raining(yn):
    if yn.lower() == 'yes':
        return True
    if yn.lower() == 'no':
        return False
yn = input("Is it raining outside? Yes or No?  ")
temp = int(input("What's the current temperature? "))
if raining == True and temp < 15:
    print("It's wet and cold")
elif raining == False and temp >= 15:
    print("It's not raining but cold")
elif raining == False and temp >= 15:
    print("It's warm but not raining")
else:
    print("It's warm and raining")


