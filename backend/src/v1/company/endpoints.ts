import { Router } from "express";
import { getCompanyById, getCompanyDueInvoices } from "./controller";
const router: Router = Router();

router.get("/:companyId", getCompanyById);
router.get("/:companyId/invoices/due", getCompanyDueInvoices);

export const companyEndpoints = router;
