import logger from "../config/logger";
import NotFoundError from "../utils/errors/notFoundError";
import {
  AddressModelInterface,
  CreateAddressInterface,
  UpdateAdressInterface,
} from "../interface/address.interface";
import { AddressRepository } from "../repository/address.repo";
import UserService from "./user.service";
const { findUserById } = UserService;

export default class AddressService {
  public static async createUserAddress(
    body: CreateAddressInterface
  ): Promise<any> {
    const { user_id } = body;
    const user = await findUserById(user_id);
    //check if user exist
    if (!user) {
      logger.info("User not found");
      throw new NotFoundError("User not found");
    }
    // create address
    const address: AddressModelInterface =
      await AddressRepository.createAddress(body);
    return address;
  }

  public static async getUserAddress(user_id): Promise<any> {
    const user = await findUserById(user_id);
    //check if user exist
    if (!user) {
      logger.info("User not found");
      throw new NotFoundError("User not found");
    }
    const address = await AddressRepository.getAddressByUserId(user_id);
    return address;
  }

  public static async updateUserAddress(
    user_id,
    body: UpdateAdressInterface
  ): Promise<any> {
    const user = await findUserById(user_id);
    //check if user exist
    if (!user) {
      logger.info("User not found");
      throw new NotFoundError("User not found");
    }
    const address = await AddressRepository.updateAddress(user_id, body);
    return address;
  }
}
