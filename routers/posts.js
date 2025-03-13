const express = require("express");
const router = express.router();

//index

router.get('/api/v1/posts', (req,res) =>{

    res.send("All posts here");

})


module.exports = router;