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


setTimeout( () => console.log("Hey let's wait!!"),1000)
