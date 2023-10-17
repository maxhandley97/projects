class BankAccount:
    def __init__(self, name, initial_balance):
        self.name = name
        self.balance = initial_balance






acc1 = BankAccount('John Smith', 1000)
print(acc1)
print(acc1.__dict__)
# acc2 = BankAccount('Mary Jones', 500)

# acc1.balance()    # 1000
# acc1.deposit(100)
# acc2.deposit(200)
# acc1.deposit(50)
# acc2.balance()    # 700
# acc1.balance()    # 1150