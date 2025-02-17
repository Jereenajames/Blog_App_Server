import express from "express"
const router = express.Router()
import {createPost,getAllPosts,getPostById,updatePostById,deletePostById}
 from "../controllers/postController.js"
 impoo

//create Post - http://localhost:5000/api/v1/posts
router.post("/:id",auth,createPost);

//getAllPost -http://localhost:5000/api/v1/posts
router.get("/",getAllPosts)

//getPostById - http://localhost:5000/api/v1/posts/id
router.get("/:id",getPostById)

//updatePostById - http://localhost:5000/api/v1/posts/id
router.put("/:id",updatePostById)

//deletePostById - http://localhost:5000/api/v1/posts/id
router.delete("/:id",deletePostById)

export default router;