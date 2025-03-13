const express = require ('express');
const app = express();
const port = 3000;
const routerPosts = require ('./routers/posts');

//server listening
app.listen(port, () =>{
    console.log(`You're running the server on http://localhost:${port}`)
})

//main route
app.get('/', (req,res) =>{

    console.log("welcome to the server");
    
});

