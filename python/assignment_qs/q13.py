# arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]
# i = 0
# while (i<len(arr) -1) and (arr[i] < arr [i+1]):
#     i += i
#     arr[i] = arr[i+1]
#     arr[i+1] = arr[i]

# print(arr)

arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]
i = 0
array_length = len(arr) - 1
# We are loopiong through the array until the following condition is met:
# the condition being that we are not at the end of the array and 
# that the current item is less than the next item resulting in two numbers that are out of order.
while i < array_length and arr[i] < arr[i + 1]:
    i += 1
if i < len(arr) - 1:
    # If the condition returns falsew, we have found two numbers not in order
    # thereby we reassign the array indexes with the two numbers, changing their order.
    current_number = arr[i]
    next_number = arr[i + 1]
    arr[i] = next_number
    arr[i + 1] = current_number

print(arr)


















# arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]
# # arr.sort()
# i = 0

# while(i<len(arr) -1):
#     nextIndex = i + 1
#     nextElement = arr[nextIndex]
#     currentElement = arr[i]

#     if currentElement < nextElement:
#         arr[i] = nextElement
#         arr[nextIndex] = currentElement
#     i = i + 1

# print(arr)
