let a=[1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]]
while(a.some(item=>Array.isArray(item))){
    a=[].concat(...a)
}
console.log(a)