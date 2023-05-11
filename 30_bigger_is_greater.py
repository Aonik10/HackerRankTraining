'''
pythonic way

https://www.hackerrank.com/challenges/bigger-is-greater/

'''

def searchMinPosible(w, x):
    arr = sorted(w)
    for i in range(0, len(arr)):
        if arr[i] > x:
            letterFound = arr.pop(i)
            return ''.join([letterFound] + arr)
    return ''.join(arr)

def swapElements(w):
    i = len(w) - 1
    while (i > 0):
        if w[i] > w[i-1]:
            left = w[0:i-1] if i != 0 else ''
            right = w[i-1:len(w)] if i != 0 else ''
            return left + searchMinPosible(right, w[i-1])
        i -= 1
    return w

def biggerIsGreater(w):
    word = swapElements(w)
    if w == word:
        return "no answer"
    return word

