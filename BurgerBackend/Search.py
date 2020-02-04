def sort(vocabs, size, maximum):
    temp = []
    for i in range(size):
        temp.append([])
    for index in range(maximum, - 1):
        for J in range(size):
            if vocabs[J].size() < index + 1:
                temp[0].append(J)
            elif vocabs[J][index] == ' ':
                temp[0].append(J)
            elif int(vocabs[J][index]) < 58:
                temp[vocabs[J][index] - 48 + 1].append(J)
            else:
                temp[vocabs[J][index] - 97 + 11].append(J)
        temp = vocabs
        vocabs.clear()
        for L in range(37):
            for k in range(len(temp[L])):
                print(temp[L])
                vocabs.append(temp[temp[L][k]])

            temp[L].clear()

    return vocabs


maximum_of_word_size = 0
Result = 0
with open("tmp.txt", 'r') as f:
    words = f.readlines()
size_of_words = len(words)
for i in range(size_of_words):
    if words[i].__len__() > maximum_of_word_size:
        maximum_of_word_size = words[i].__len__()
words = sort(words, size_of_words, maximum_of_word_size)
print(words[int(size_of_words / 2) + 1], "\n")
for j in range(size_of_words):
    if words[j] == words[int(size_of_words / 2) + 1]:
        Result += 1

print(Result, "\n")
