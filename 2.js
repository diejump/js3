function fun(...nums){
    let sum=1
    for(let i of nums){
        sum*=i
    }
    return sum
}

console.log(fun(1,2,3,4))