const express = require("express");
const router = express.Router();

//index

router.get('/', (req,res) =>{

    res.send("All posts here");

})

// show 
router.get('/:id', (req,res) =>{

    const postsId = req.params.id
    res.send(`this is the post: ${postsId}`);

})

//store

router.post('/', (req,res) =>{

    res.send("All posts here");

})

// update

router.put('/:id', (req,res) =>{

    const postsId = req.params.id
    res.send(`this is the post: ${postsId}`);

})

// modify

router.patch('/:id', (req,res) =>{

    const postsId = req.params.id
    res.send(`this is the post: ${postsId}`);

})

// delete

router.delete('/:id', (req,res) =>{

    const postsId = req.params.id
    res.send(`this is the post: ${postsId}`);

})


module.exports = router;