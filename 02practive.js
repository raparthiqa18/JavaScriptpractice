
//Method 1, this needs to be run in browser console 
// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();


// Http.onreadystatechange = (e) => {
// //   console.log(Http.responseText)
//   console.log("Status" + Http.status)
//   console.log("Status" + Http.status)
// }

//Method 2: Using axios, needs axios setup on the machine 
// npm install axios --save     => run command to include axios in the project

const { default: axios } = require("axios");
const url='https://jsonplaceholder.typicode.com/posts';
axios.get(url)
.then(data=>console.log(data))
.catch(err=>console.log(err))

