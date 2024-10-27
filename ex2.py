def odd_pyramid(x):
    for i in range(1, x + 1):
        for j in range(1, 2 * i, 2):
            print(j, end = " ")
        print()

x = int(input("Enter x: "))
odd_pyramid(x)