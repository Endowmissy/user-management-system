import { Router } from "express";
import PostController from "../../controller/post.controller";
import { createPostValidator } from "../../validators/post.validation";
const { createNewPost, getUserPosts, deletePost } = PostController;

const router = Router();

router.post("/", createPostValidator, createNewPost);
router.get("/", getUserPosts);
router.delete("/:id", deletePost);

export default router;
