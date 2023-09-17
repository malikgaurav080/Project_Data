import fs from 'fs';
import os from 'os'

console.log(os.cpus())
console.log(os.hostname())

fs.writeFileSync('My.txt', 'I am try to write file........')
console.log("File write sucessfully!!");


//Async in nature
fs.appendFileSync('./My.txt', " I am appending the data into file using appendfile function.")
console.log("File appended successfully");



//Async in nature
const data = fs.readFileSync('./My.txt')
console.log("Reading File...........")
console.log(data.toString());