//https://www.youtube.com/watch?v=HgZ4tle2CoM&list=PLzDWIPKHyNmLxpL8iQWZXwl_ln0BgckLt&index=11
//Synchronous
// function print(string){
//     console.log(string)
// }

// print('Start')
// print("Started printing")
// print("Finish")

//Asynchronous
// function print(string){
//     setTimeout(()=> {
//         console.log(string)
//     }, Math.floor(Math.random() * 100))
// }

// print('Start')
// print("Started printing")
// print("Finish")

console.log("***********CALLBACKS********* \n")

// function print(string, callback){
//     setTimeout(()=> {
//         console.log(string)
//         callback()
//     }, Math.floor(Math.random() * 100))
// }

// print('Start', () => {
//     print('Started Printing', () => {
//         print('Finish', () => { })
//     })
// })
console.log("***********Promises to fix the nesting problem ********* \n")

// function print(string){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log(string) 
//             resolve()
//         }, Math.floor(Math.random() * 100))
//     })   
// }

// print('Start')
//  .then(()=> print('Started Printing'))
//  .then(() => print('Finish') )
 
 console.log("*********** Async await ********* \n")

 
function print(string){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(string) 
            resolve()
        }, Math.floor(Math.random() * 100))
    })   
}

async function printAll(){
    await print('Start')
    await print("Started printing")
    await print("Finish") 
}
 
printAll()