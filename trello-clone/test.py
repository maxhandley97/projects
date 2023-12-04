def mergeTwoLists(list1, list2):
    merged_list = []
    x = y = 0
    while len(list1) > x and len(list2) > y:
        if list1[x] < list2[y]:
            merged_list.append(list1[x])
            x += 1
        else:
            merged_list.append(list2[y])
            y += 1
    print(list1[x:])
    print(list2[y:])
    merged_list.extend(list1[x:])
    merged_list.extend(list2[y:])
    return merged_list

list1 = []
list2 = [0]
print(mergeTwoLists(list1, list2)) # prints