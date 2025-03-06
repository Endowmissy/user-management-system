import db from "../database/db";
import { AddressModelInterface, UpdateAdressInterface } from "../interface/address.interface";

export class AddressRepository {
  /**
   * Creates a new user
   * @param data
   * @returns
   */
  public static async createAddress(data: object): Promise<AddressModelInterface> {
    return await db("addresses").insert(data);
  }

  /**
   * Get address associated with a user
   * @param user_id
   * @returns
   */
  public static async getAddressByUserId(user_id: string) {
    return await db("addresses").where({ user_id }).first();
  }

  /**
   * Update address associated with a user
   * @param user_id
   * @param address
   * @returns
   */

  public static async updateAddress(user_id: string, address: UpdateAdressInterface) {
    return await db("addresses").where({ user_id }).update(address).returning("*");
  }
}
