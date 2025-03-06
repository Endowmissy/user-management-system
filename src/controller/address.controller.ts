import logger from "../config/logger";
import { Request, Response } from "express";
import Helper from "../utils/helpers/helpers";
import AddressService from "../services/address.service";
const { successResponse, errorResponse } = Helper;

export default class AddressController {
  /**
   * Create a new user
   * @param req
   * @param res
   * @returns
   */

  public static async createUserAddress(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Creating user address`);
      const data = await AddressService.createUserAddress(req.body);
      logger.info(`::: User address created successfully`);
      return successResponse(res, "User address created successfully", 201, data);
    } catch (error) {
      logger.info(`::: Failed to create user address`, error);
      return errorResponse(req, res, error.message);
    }
  }

  public static async getUserAddress(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Fetching user address`);
      const data = await AddressService.getUserAddress(req.params.userID);
      logger.info(`::: User Address fetched successfully`);
      return successResponse(res, "User Address fetched successfully", 200, data);
    } catch (error) {
      logger.info(`::: Failed to fetch user address`, error);
      return errorResponse(req, res, error);
    }
  }

  public static async updateUserAddress(req: Request, res: Response): Promise<any> {
    try {
      logger.info(`::: Updating user address`);
      const data = await AddressService.updateUserAddress(req.params.userID,req.body);
      logger.info(`::: User address updated successfully`);
      return successResponse(res, "User address updated successfully", 200, data);
    } catch (error) {
      logger.info(`::: Failed to update user address`, error);
      return errorResponse(req, res, error);
    }
  }
}
