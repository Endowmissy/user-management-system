import logger from "../config/logger";
import { v4 as uuidv4 } from "uuid";
import NotFoundError from "../utils/errors/notFoundError";
import {
  PostModelInterface,
  CreatePostInterface,
} from "../interface/post.interface";
import { PostRepository } from "../repository/post.repo";
import UserService from "./user.service";
const { findUserById } = UserService;

export default class PostService {
  public static async createNewPost(body: CreatePostInterface): Promise<any> {
    const { user_id } = body;
    const user = await findUserById(user_id);
    //check if user exist
    if (!user) {
      logger.info("User not found");
      throw new NotFoundError("User not found");
    }
    // create post
    const post: PostModelInterface = await PostRepository.createPost({
      id: uuidv4(),
      ...body,
    });
    return post;
  }

  public static async getPosts(userId): Promise<any> {
    const user = await findUserById(userId);
    //check if user exist
    if (!user) {
      logger.info("User not found");
      throw new NotFoundError("User not found");
    }
    const posts = await PostRepository.getUserPosts(userId);
    return posts;
  }

  public static async deletePost(postId): Promise<any> {
    const deletedPost = await PostRepository.deletePost(postId);
    return deletedPost;
  }
}
