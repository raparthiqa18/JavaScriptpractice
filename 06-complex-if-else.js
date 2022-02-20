const car = {
    price: 2001,
    color: "red",
    doors: 4
}

if(car.price < 2000 || (car.color == "red" &&  car.doors ==4)){
    console.log("We'll take it ");
}else{
    console.log("Well, it's best we keep looking");
}