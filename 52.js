let a={
    arr:[1,2,3,[4,5]],
    name:1,
}

let b=JSON.parse(JSON.stringify(a))

b.name=2
b.arr[3]=3
console.log(a,b)