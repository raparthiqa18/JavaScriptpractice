'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const axios = require("axios")
/*
 * Complete the 'getUsernames' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER threshold as parameter.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/article_users?page=<pageNumber>
 */

async function getUsernames(threshold) {
    let count = 1
    let total = 0
    const users = []
  const res = await axios.get(`https://jsonmock.hackerrank.com/api/article_users?page=${1}`).then(({data}) =>
   {
       total = data.total_pages
   })
  while (count <= total) {
  const response = await axios.get(`https://jsonmock.hackerrank.com/api/article_users?page=${count}`).then(({data}) =>
   {
       for (var user of data.data){
           if(user.submission_count > threshold ){
               users.push(user.username)
           }
       }
   })
  count++;
}
   return users
}

async function main() {}