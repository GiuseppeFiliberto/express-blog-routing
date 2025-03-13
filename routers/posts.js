const express = require("express");
const router = express.Router();
const blogPosts = require('../posts')

//middleweres 

router.use(express.static('public'));



//All routes below


//index

router.get('/', (req,res) =>{

    // res.send("All posts here");

    // bonus 

    res.json(blogPosts);

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
    res.send(`you're updating the post: ${postsId}`);

})

// modify

router.patch('/:id', (req,res) =>{

    const postsId = req.params.id
    res.send(`you're modifying the post: ${postsId}`);

})

// delete

router.delete('/:id', (req,res) =>{

    const postsId = req.params.id
    res.send(`you're deleting the post: ${postsId}`);

})


module.exports = router;