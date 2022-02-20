const cookie = {
    name: "Chocolate cookie",
    isGlutenFree: false,
    "$%^dhdhdh9": "yummy",

    eatcookie: function(){
            console.log("I am eating cookie " + this.name);
    }
}

cookie.name="Butter cookie";
cookie["$%^dhdhdh9"]="tastes yummy";
// console.log(cookie.isGlutenFree);
// console.log(cookie["$%^dhdhdh9"]);
// console.log(cookie);
// cookie.eatcookie();

class Cookie{ 
    constructor(name, isGlutenFree){
    this.name=name;
    this.isGlutenFree=isGlutenFree
    }
    eatcookie (){
        console.log("I am eating cookie " + this.name + " inside class")
    }

}
const mycookie = new Cookie("Iced oatmeal", true);

console.log(mycookie.name);
console.log(mycookie.isGlutenFree)
mycookie.name="Almond cookie";
mycookie.eatcookie();

