import db from "../database/db";
import { UserModelInterface } from "../interface/user.interface";

export class UserRepository {
  /**
   * Creates a new user
   * @param data
   * @returns
   */
  public static async createUser(data: object): Promise<UserModelInterface> {
    return await db("users").insert(data);
  }

  /**
   * Return a specific user
   * @param userId
   * @returns
   */

  public static async getOneUser(userId: string): Promise<UserModelInterface> {
    return await db("users")
      .join("addresses", "users.id", "addresses.user_id")
      .where("users.id", userId)
      .select("users.*", "addresses.*")
      .first();
  }

  public static async getUserBy(row, value): Promise<UserModelInterface> {
    return await db("users").where(row, value).first();
  }

  /**
   * Returns paginated list of users
   * @param limit
   * @param offset
   * @param order
   * @returns
   */

  public static async getAllUsers(
    limit: number,
    offset: number,
    order: string = "desc"
  ): Promise<any> {
    return await db("users")
      .select("*")
      .limit(limit)
      .offset(offset)
      .orderBy("created_at", order);
  }

  /**
   * Returns total number of users
   * @returns
   */

  public static async getAllUsersCount(): Promise<any> {
    return await db("users")
      .count<Record<string, number>>("* as count")
      .first();
  }
}
