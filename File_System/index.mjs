import fs from 'fs';

// fs.writeFile('My.txt', 'I am try to write file.', (err) =>
// {
//     if(err){
//         throw err
//     }
//     console.log("file Write sucessfully!!")
// })


//Assync in nature
fs.writeFile('My.txt', 'I am try to write file.', (err) =>
{
    if(!err){
        console.log("file Write sucessfully!!")
    }
    
})


//Async in nature
fs.appendFile('./My.txt', " I am appending the data into file using appendfile function.", (err) =>
{
    if(!err){
        console.log("File appended successfully");
    }
})


//Async in nature
fs.readFile('./My.txt', (err, data)=>{
    if(!err){
        console.log("Reading File...........")
        console.log(data.toString())
    }
})