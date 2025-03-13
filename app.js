const express = require ('express');
const app = express();
const port = 3008;
const routerPosts = require ('./routers/posts');

//middlewere
app.use('/api/v1/posts', routerPosts);

//server listening
app.listen(port, () =>{
    console.log(`You're running the server on http://localhost:${port}`)
})

//main route
app.get('/', (req,res) =>{

    res.send("welcome to the server");
    
});

