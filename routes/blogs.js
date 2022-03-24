var express = require('express');
const Blogs = require('./BlogsArray');
var router = express.Router();

router.get('/getBlogs', (req, res) => {
    console.log(Blogs);
    res.send(Blogs);
})

module.exports = router;
