function sum(a, b){
    return sum=a+b;
}

console.log(sum(20,10));

function product(a, b){
    return a*b;
}

console.log(product(12,23));

const bigProduct = product(5252, 73733);
console.log(bigProduct);


setTimeout(function () {
    console.log("Hey let's wait!!");
},1000)

/*
convert farenheit to celsius 
ex: 32F = 0 C
(32°F − 32) × 5/9 = 0°C
*/
let farenheit=32;
function farenheittocelsius(farenheit){
return  (farenheit-32) *5/9
}

console.log(farenheit + "To celsius: " +  farenheittocelsius(100));

//== in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values.
let x = "str"
let y =new String("str")
console.log(x==y)
console.log(x===y)

setTimeout( () => console.log("Hey let's wait!!"),1000)
let car;
console.log(car)

console.log(5/2);
console.log(5%2);

