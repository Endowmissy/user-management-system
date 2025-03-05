import { Router } from "express";
import UserController from "../../controller/user.controller";
import { createUserValidator } from "../../validators/user.validation";
const { createNewUser, getAllUsers, getTotalUsers, getOneUser } =
  UserController;

const router = Router();

router.post("/new-user", createUserValidator, createNewUser);
router.get("/", getAllUsers);
router.get("/count", getTotalUsers);
router.get("/:id", getOneUser);


export default router;
