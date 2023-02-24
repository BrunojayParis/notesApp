import {Router} from 'express'
import {getPosts, deletePost, createPost} from'../controllers/posts.controller.js'

const router = Router()
//GET
router.get('/posts', getPosts)

//POST
router.post('/posts', createPost)

//DELETE
router.delete('/posts/:id', deletePost)



export default router


