let fruits="Orange, Apple, Orange, Banana, Orange"

console.log(fruits.length)
console.log(fruits)

//Slice(start, end)
console.log("*********Slice************")
console.log(fruits.slice(7))
console.log(fruits.slice(7, 13))
console.log(fruits.slice(-6))
console.log(fruits.slice(-6, -1))


//substring(start, end)
console.log("*********substring************")
console.log(fruits.substring(7,13))
console.log(fruits.substring(7))

//substr(start, length)  => deprecated 
console.log("**********Replace*********")
console.log(fruits.replace("Orange", "Grapes"))
console.log(fruits.replace(/orange/i, "test"))
console.log(fruits.replace(/Orange/g, "test"))

console.log("***Other string operations*****")
console.log(fruits.toUpperCase()+fruits.toLowerCase())
console.log(fruits.toUpperCase().concat(fruits.toLowerCase()))
console.log(fruits.charAt(10))

const arr=fruits.split(",")
arr.forEach((n)=>console.log(n))