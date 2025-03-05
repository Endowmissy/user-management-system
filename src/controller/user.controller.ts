import logger from "../config/logger";
import { Request, Response } from "express";
import Helper from "../utils/helpers/helpers";
import UserService from "../services/user.service";
const { successResponse, errorResponse } = Helper;

export default class UserController {
  /**
   * Create a new user
   * @param req
   * @param res
   * @returns
   */

  public static async createNewUser(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Creating a new user`);
      const data = await UserService.createNewUser(req.body);
      logger.info(`::: User created successfully`);
      return successResponse(res, "User created successfully", 201, data);
    } catch (error) {
      logger.info(`::: Failed to create user`, error);
      return errorResponse(req, res, error.message);
    }
  }

  public static async getOneUser(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Fetching user`);
      const data = await UserService.getOneUser(req.params);
      logger.info(`::: User fetched successfully`);
      return successResponse(res, "User fetched successfully", 201, data);
    } catch (error) {
      logger.info(`::: Failed to fetch user`, error);
      return errorResponse(req, res, error);
    }
  }

  public static async getAllUsers(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Fetching all users`);
      const data = await UserService.getAllUsers(req.body);
      logger.info(`::: All Users fetched successfully`);
      return successResponse(res, "All Users fetched successfully", 201, data);
    } catch (error) {
      logger.info(`::: Failed to fetch all users`, error);
      return errorResponse(req, res, error);
    }
  }

  public static async getTotalUsers(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Fetching total number of users`);
      const data = await UserService.getTotalUsers();
      logger.info(`::: Total number of users fetched successfully`);
      return successResponse(
        res,
        "Total number of users fetched successfully",
        201,
        data
      );
    } catch (error) {
      logger.info(`::: Failed to fetch total number of users`, error);
      return errorResponse(req, res, error);
    }
  }
}
