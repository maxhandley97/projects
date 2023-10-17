class BankAccount:
    def __init__(self, name, initial_balance):
        self.name = name
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount


acc1 = BankAccount('John Smith', 1000)
acc2 = BankAccount('Mary Jones', 500)

print(acc1.balance)    # 1000
acc1.deposit(100)
print(acc1.balance)   #DEBUG
acc2.deposit(200)
acc1.deposit(50)
acc2.balance    # 700
acc1.balance    # 1150