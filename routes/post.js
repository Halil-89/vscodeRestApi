const express = require('express');
const { getPost, createPost, getDetail, getUpdate, getDelete } = require('../controllers/post.js');
const auth = require('../middleware/auth.js');
const router = express.Router();

router.get('/getPosts',getPost)
router.post('/createPost',auth,createPost)
router.get('/getDetail/:id',getDetail)
router.patch('/getUpdate/:id',auth,getUpdate)
router.delete('/deletePost/:id',getDelete)
//router.get('/searchPost',searchPost)

module.exports=router
