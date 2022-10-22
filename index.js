const express = require('express');

const app=express();

//midleware
//app.use(express.json());


//routes

app.use("/demo",require("./routes/demo-router"));
app.use("/people",require("./routes/people-router"));


app.listen(3000,function(){
    console.log('Server ready');
});

