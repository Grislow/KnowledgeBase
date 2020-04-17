name = 'Jonathan'
a_list = [1, 2, 3]
a_dict = {1: 'one', 2: 'two', 3: 'three'}
a_tuple = ('Orange', 'Banana', 'Lemon')
a_set = {1, 2, 3}
tupleList = [(1, 2), (2, 3), (3, 4)]

for char in name:
    print(char, end=',')			 # J,o,n,a,t,h,a,n,
print()

for el in a_list:
    print(el, end=' ')			 # 1 2 3
print()

for num in a_set:
    if num % 2 != 0:
        print(num, end=' ')		# 1 3
print()

for (a, b) in tupleList:
	print(a * b, end=" ")
