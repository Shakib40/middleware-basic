const express = require('express');
const users = require('./books.json');

const app = express();

app.use(express.json() );

// this will return all the users
app.get("/" , (req,res) =>{
    return res.send( {users} );
});


// pass an user to it and it will append it to the end of the users and return it
app.post("/books" , (req,res) =>{
    const newUser = [...users , req.body ];
    res.send(newUser);
});

// this will return user with a specific id
app.get("/books/:id/" , (req,res) =>{
    res.send(req.params.id);
});

// app.patch("/books/:id/:email" , (req,res) =>{
//     console.log(req.params.id);
//     console.log(req.params.email);
//     res.send("Post 1");
// });

// app.patch("/books/:id" , (req,res) =>{
//     const newUser = users.map( (user) =>{
//         if(req.params.id === user.id){
//             if(req?.body?.first_name) user.first_name = req.body.first_name;
//             if(req?.body?.last_name) user.last_name = req.body.last_name;
//             if(req?.body?.email) user.email = req.body.email;
//             if(req?.body?.gender) user.gender = req.body.gender;
//         //    return req.body;
//         }
//         return user;
//     });
//     res.send(newUser);
// });

app.delete("/books/:id" , (req,res) => {
    const newUser = users.filter( (user) => user.email !== req.params.email);
    res.send(newUser);
});


app.listen(2345, function() {
    console.log("Listening on Port 2345");   
});

