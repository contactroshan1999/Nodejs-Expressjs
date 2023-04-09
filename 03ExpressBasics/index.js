const express = require('express');
const app = express();




app.get('/',(req, res) =>{
        res.send('Hello World');
});
app.get('/about-us',(req,res) =>{
        res.send('<h1>This is about page</h1>');
});

app.get('/ab*cd' ,(req,res) =>{
        res.send("<h1>This is Regex Page</h1>")
});

app.get('/user/:id/status/:status_id', (req,res) =>{
        res.send(req.params);
});

app.get("/flights/:from-:to", (req,res) =>{
        res.send(req.params);
});

app.post('/login', (req,res) =>{
        res.send('Login Success Done');
});

app.get('/user-details', (req,res) =>{
        res.status(200).json({user_name:"Roshan",id:101,address:"Sonipat"});
});
app.listen(3000, () =>{
        console.log("Server is Running at port 3000 ....");
})