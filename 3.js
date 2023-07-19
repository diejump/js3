function add(a){
    return b=>{
        return c=>{
            console.log(a+b+c)
        }
    }
}
add(1)(2)(3)