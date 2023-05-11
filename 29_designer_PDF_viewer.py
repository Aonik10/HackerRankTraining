# https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

def designerPdfViewer(h, word):
    # Write your code here
    abc = list(string.ascii_lowercase)
    obj = {}
    for i in range(0, len(h)):
        if h[i] in obj.keys():
            obj[h[i]].append(abc[i])
        else:
            obj[h[i]] = [abc[i]]
    obj_arr = list(obj.keys())
    obj_arr.sort(reverse=True)
    for height in obj_arr:
        for i in range(0, len(obj[height])):
            if obj[height][i] in word:
                return height * len(word)
    return len(word)