class Character:
    def __init__(self, name, race, health, attack):
        self.name = name
        self.race = race
        self.health = health
        self.attack = attack
        self.inv = Inventory([], 0, 0, 0)
    
    def battle(self, other):
        print(f'{self.name} attacks {other.name}!')


class Chest:
    def __init__(self, items, gold, silver, copper):
        self.inv = Inventory(items, gold, silver, copper)

class Ranger(Character): #ranger inherits from Character
    def battle(self, other): #ranger battle will override character, can add other perculiar methods
        print(f'{self.name} launches brutal attack on {other.name}!')
    def recruit_undead(self):
        pass

class Mage(Character):
    def __init__(self, name, race, health, attack):
        self.name = name
        self.race = race
        self.mana = 100
        self.health = health
        self.attack = attack
        self.inv = Inventory([], 0, 0, 0)

    def battle(self, other):
        print(f'{self.name} casts a wicked spell on {other.name}!')
        self.mana -= 20


class Burglar(Character):
    def battle(self, other):
        print(f'{self.name} stealth attacks {other.name}!')

class Wizard(Character):
    def battle(self, other):
        print(f'{self.name} summons an orc minion, which attacks {other.name}!')


class Chest:
    def __init__(self, items, gold, silver, copper):
        self.inv = Inventory(items, gold, silver, copper)

class Inventory:
    def __init__(self, items, gold, silver, copper):
        self.items = items
        self.set_currency(gold, silver, copper) #delegation
    
    def transfer(self, to_inv):
        # add all items from from_inv to to_inv
        to_inv.items.extend(self.items)
        # delete all items from from_inv
        self.items = []
        #same for copper
        to_inv.copper += self.copper
        self.copper = 0

        
    #SETTER
    def set_currency(self, gold, silver, copper):
        self.copper = gold * 10000 + silver * 100 + copper

#GETTER
    def get_currency(self):
        #return gold, silver, copper
        gold = self.copper // 10000
        silver = (self.copper % 10000) // 100
        copper = self.copper % 100
        return gold, silver, copper
