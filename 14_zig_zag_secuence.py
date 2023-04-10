"""
A problem in the HackerRank exercise show no source for NodeJS to resolve the challenge, i decided to do it in python 3

I had to modify 3 lines of the current findZigZagSequence function. Here is my solution.
"""

def findZigZagSequence(a, n):
    a.sort()
    mid = int(n/2) #Before int((n + 1)/2)
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2 # Before ed = n - 1
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1 # ed = ed + 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return
