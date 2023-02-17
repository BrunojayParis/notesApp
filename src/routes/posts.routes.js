const {Router} = require('express')
const {getPosts, deletePost, createPost} = require('../controllers/posts.controller')




const router = Router()

router.get('/posts', getPosts)


router.post('/posts', createPost)


router.delete('/posts/:id', deletePost)



module.exports = router;


