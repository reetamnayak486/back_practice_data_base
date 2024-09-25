const express= require('express');
const app= express();

app.use('/user/:id', (req, res, next)=>{
    console.log('request type:', req.method);
    next();
})

app.get()
app.post()