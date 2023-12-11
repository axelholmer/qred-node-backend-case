import { Router } from "express";
import {
  getCardById,
  getCardTransactions,
  getCardsByCompanyId,
} from "./controller";
const router: Router = Router();

router.get("/:cardId", getCardById);
router.get("/:cardId/transactions", getCardTransactions);
router.get("/", getCardsByCompanyId);

export const cardEndpoints = router;
