import logger from "../config/logger";
import NotFoundError from "../utils/errors/notFoundError";
import BadRequestError from "../utils/errors/badRequestError";
import {
  UserModelInterface,
  CreateUserInterface,
  Pagination,
} from "../interface/user.interface";
import { UserRepository } from "../repository/user.repo";
import Helper from "../utils/helpers/helpers";
const { preparePagination, getTotalPages } = Helper;
import { v4 as uuidv4 } from "uuid";

export default class UserService {
  public static async findUserByEmail(email: string): Promise<UserModelInterface> {
    return await UserRepository.getUserBy("email", email);
  }

  public static async findUserById(id: string): Promise<UserModelInterface> {
    return await UserRepository.getUserBy("id", id);
}

  public static async createNewUser(body: CreateUserInterface): Promise<any> {
    const { first_name, last_name, email } = body;
    const emailExists: UserModelInterface = await this.findUserByEmail(email);
    //check if user email exist
    if (emailExists) {
      logger.info("Email already exists");
      throw new BadRequestError("Email already exists");
    }
    // create user
    const user = await UserRepository.createUser({
      id: uuidv4(),
      first_name,
      last_name,
      email,
    });
    return user;
  }

  public static async getOneUser(id): Promise<any> {
    // fetch user
    const user = await this.findUserById(id);
    //check if user exist, if user doesn't exist throw error
    if (!user) {
      logger.info("User not found");
      throw new NotFoundError("User not found");
    }
    const userDetails = await UserRepository.getOneUser(id);
    return userDetails;
  }

  public static async getAllUsers(pagination: Pagination): Promise<any> {
    const { pageNumber, pageSize } = preparePagination(pagination);
    const users = await UserRepository.getAllUsers(
      pageSize,
      pageNumber
    );
    const { count: totalUsers } = await UserRepository.getAllUsersCount();
    return { users, totalPages: getTotalPages(totalUsers, pageSize) };
  }

  public static async getTotalUsers(): Promise<any> {
    const { count: totalUsers } = await UserRepository.getAllUsersCount();
    return totalUsers;
  }
}
