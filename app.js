const express = require('express');
const users = require('./users_data.json');

const app = express();

app.use(express.json() );

app.get("/" , (req,res) =>{
    return res.send( {users} );
});

app.post("/" , (req,res) =>{
    const newUser = [...users , req.body ];
    res.send(newUser);
});

// app.patch("/:id/:email" , (req,res) =>{
//     console.log(req.params.id);
//     console.log(req.params.email);
//     res.send("Post 1");
// });

app.patch("/:email" , (req,res) =>{
    const newUser = users.map( (user) =>{
        if(req.params.email === user.email){
            if(req?.body?.first_name) user.first_name = req.body.first_name;
            if(req?.body?.last_name) user.last_name = req.body.last_name;
            if(req?.body?.email) user.email = req.body.email;
            if(req?.body?.gender) user.gender = req.body.gender;
        //    return req.body;
        }
        return user;
    });
    res.send(newUser);
});

app.delete("/:email" , (req,res) => {
    const newUser = users.filter( (user) => user.email !== req.params.email);
    res.send(newUser);
});

app.get("/:email", (req,res) => {
    const newUser = users.filter( (user) => user.email === req.params.email);   
    res.json(newUser);
});

app.listen(2345, function() {
    console.log("Listening on Port 2345");   
});

