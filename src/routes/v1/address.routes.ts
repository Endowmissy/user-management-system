import { Router } from "express";
import AddressController from "../../controller/address.controller";
import { createUserAddressValidator, updateUserAddressValidator } from "../../validators/address.validation";
const { createUserAddress, getUserAddress, updateUserAddress } = AddressController;

const router = Router();

router.post("/", createUserAddressValidator, createUserAddress);
router.get("/:userID", getUserAddress);
router.patch("/:userID", updateUserAddressValidator, updateUserAddress);

export default router;
