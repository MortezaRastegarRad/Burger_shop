def sort(list_1, list_2, n, fix):
    if n > 1:
        b = []
        b2 = []
        for i in range(n):
            bi = 10 * list_1[i]
            if fix == 2:
                x = list_1[i]
                x = x * 10
                x -= float(int(x))
                bi = 10 * x
            b[bi].append(list_1[i])
            b2[bi].append(list_2[i])
        for i in range(10):
            sort(b[i], b2[i], b[i].size(), 2)
        list_1.clear()
        list_2.clear()
        for i in range(10):
            for j in range(len(b[i])):
                list_1.append(b[i][j])
                list_2.append(b2[i][j])


with open("tmp.txt", 'r') as f:
    values = f.read().split(' ')
    num1, num2 = [], []
    for i in range(len(values)):
        value1 = values[i]
        value2 = values[i + 1]
        num1.append(float(value1) / 1000)
        num2.append(float(value2) / 1000)
    sort(num1, num2, len(num1), 1)
    for i in range(len(num1)):
        num2[i] *= 1000
    ans = 0
    for i in range(len(num1)):
        ans += (num1[i] - num1[i - 1]) * (num2[i] + num2[i - 1]) / 2
    print(ans, "\n")
