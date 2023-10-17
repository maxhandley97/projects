class Menu: #ranger inherits from Character
    def __init__(self, startTime, endTime, menuItems):
        self.startTime = startTime
        self.endTime = endTime
        self.menuItems = menuItems

    def active(self):
        return date.now() >= self.startTime & date.now() <= self.endTime
     

class BreakfastMenu(Menu): 
    def __init__(self, startTime, endTime, menuItems):
        self.startTime = startTime
        self.endTime = endTime
        self.menuItems = menuItems