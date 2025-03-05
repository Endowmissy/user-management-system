import db from "../database/db";
import { UserModelInterface } from "../interface/user.interface";

export class UserRepository {
  /**
   * Creates a new user
   * @param table
   * @param data
   * @returns
   */
  public static async createUser(
    table: string,
    data: object
  ): Promise<UserModelInterface> {
    return await db(table).insert(data);
  }

  /**
   * Return a specific user
   * @param table the table to query
   * @param row the row to query
   * @param value the value to query by
   * @returns
   */
  public static async getOneUser(
    table: string,
    row: string,
    value: any
  ) {
    return await db(table).where(row, value).first();
  }

  /**
   * Returns paginated list of users
   * @param table table to query
   * @returns
   */

  public static async getAllUsers(
    table: string,
    limit: number,
    offset: number,
    order: string = "desc"
  ): Promise<any> {
    return await db(table)
      .select("*")
      .limit(limit)
      .offset(offset)
      .orderBy("created_at", order);
  }

  /**
   * Returns total number of users
   * @param table table to query
   * @returns
   */

  public static async getAllUsersCount(table: string): Promise<any> {
    return await db(table).count<Record<string, number>>("* as count").first();
  }
}
