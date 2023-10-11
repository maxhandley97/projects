#GET wage
print('What is your weekly wage?')
weeklyWages = float(input())
#get living expenses
print('What is your weekly living expenses?')
livingExpenses = float(input())
#get price of computer
print('What is your price of computer?')
computerPrice = float(input())

weeks = round(computerPrice / (weeklyWages - livingExpenses))
print("It will take " + str(weeks) + " weeks to save for your computer.")