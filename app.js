const express = require('express');
const app = express()
const PORT = process.env.PORT || 8080

data = 'https://api.publicapis.org/entries'

app.get('/', (req,res)=>{
    res.send("welcome to home ---")
})

// app.get("" , (req,res)=>{
//     res.write
// })

app.listen(PORT, ()=>{
    console.log("Server is running on PORT   " +  PORT)
});