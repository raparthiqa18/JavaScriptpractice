
//Function
function add(a,b){
    return a+b
}
// console.log(add(12,13))

let product=()=>{return 12*13}
// console.log(product())
hello = () => "Hello World!";
// console.log(hello())


//Object

const book = {
    title: "Hanuman chalisa",
    author: "tulsidas",
    // genre: function () {
    //     console.log("OM")
    // }
    genre:  () => {
        // console.log("OM")
    }
}

// console.log(book)
// console.log(book.author)
book.genre()

//Class

class cars{
    constructor(name, year){
        this.name=name
        this.year=year
    }
    getage(){
        // console.log("2022 " + this.year)
    }
}

const bmwcar=new cars("BMW", "2011")
bmwcar.getage()

const arr=[40]
arr[1]=12;
console.log(arr)