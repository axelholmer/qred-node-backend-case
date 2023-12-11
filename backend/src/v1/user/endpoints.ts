import { Router } from "express";
import { getAllUsers, getUserById } from "./controller";
const router: Router = Router();

router.get("/", getAllUsers);
router.get("/:userId", getUserById);

export const userEndpoints = router;
