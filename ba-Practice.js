let name='John'  //variable
console.log(name)
let Age= 16
console.log(Age)
let ageMorethan20 = false
console.log(ageMorethan20)
name='Rakesh'
console.log(name)
const secondname='test' //constants 
console.log(secondname)
// secondname='test2' //TypeError: Assignment to constant variable.
// Age = 'testtyepcast' 
console.log(Age)

if(Age>=30){
    ageMorethan20=true 
}else if(Age>20 && Age<30){
    console.log("Age is between 20 and 30 ")    
}else{
    ageMorethan20=false
}

console.log("Age is more  than 20: " + ageMorethan20)

let ageMoreThan18 = Age>18 ? true:false
console.log(ageMoreThan18)

//loops
let i = 0
while (i<5){
    console.log('i is now: ' + i)
    i++
}

for(i=0; i<5; i++){console.log('i is now: ' + i)}

//Functions 
// function product(a, b){
//     let product=a*b
//     return product
// }

//or
product=function (a, b){
    return a*b
}
 
let result = product(2,3)
console.log("Product is :" + result)


//Arrow function with multiple statements in the body
product= (a, b)=>{
    return a*b
}
console.log("Product is :" + product(4,3))

//Arrow function with single statement in the fucntion body
product= (a, b)=>a*b
console.log("Product is :" + product(4,3))

//Arrow function with a single parameter
product = a => a*10
console.log("Product is :" + product(4,3))

//Arrow function without parameters
product  = () => 10*20
console.log("Product is :" + product(4,3))
