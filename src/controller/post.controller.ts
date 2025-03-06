import logger from "../config/logger";
import { Request, Response } from "express";
import Helper from "../utils/helpers/helpers";
import PostService from "../services/post.service";
const { successResponse, errorResponse } = Helper;

export default class PostController {
  /**
   * Create a new post
   * @param req
   * @param res
   * @returns
   */

  public static async createNewPost(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Creating new post`);
      const data = await PostService.createNewPost(req.body);
      logger.info(`::: New post created successfully`);
      return successResponse(res, "New post created successfully", 201, data);
    } catch (error) {
      logger.info(`::: Failed to create a post`, error);
      return errorResponse(req, res, error.message);
    }
  }

  public static async getUserPosts(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Fetching user posts`);
      const data = await PostService.getPosts(req.query.userId);
      logger.info(`::: User Posts fetched successfully`);
      return successResponse(res, "User Posts fetched successfully", 200, data);
    } catch (error) {
      logger.info(`::: Failed to fetch user posts`, error);
      return errorResponse(req, res, error);
    }
  }

  public static async deletePost(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Deleeting post`);
      const data = await PostService.deletePost(req.params.id);
      logger.info(`::: Post deleted successfully`);
      return successResponse(res, "Post deleted successfully", 200, data);
    } catch (error) {
      logger.info(`::: Failed to delete post`, error);
      return errorResponse(req, res, error);
    }
  }
}
