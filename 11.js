let a=[1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]]
function fun(a){
    return a.reduce((pre,cur)=>{
    return pre.concat(Array.isArray(cur)?fun(cur):cur)
},[])}
console.log(fun(a))
