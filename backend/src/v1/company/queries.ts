import db from "../infra/database/db";
import { InvoiceModel } from "../invoice/model";
import { CompanyModel } from "./model";

export const getCompanyById = async (
  companyId: string
): Promise<CompanyModel | null> => {
  const query = "SELECT * FROM companies WHERE id = $1;";

  const values: string[] = [companyId];
  const results = await db.query<CompanyModel>(query, values);
  return results.length ? results[0] : null;
};

export const getDueInvoices = async (
  companyId: string
): Promise<InvoiceModel[]> => {
  const query =
    "SELECT * FROM invoices WHERE id = $1 AND paid_at IS NULL;";

  const values: string[] = [companyId];
  const results = await db.query<InvoiceModel>(query, values);
  return results;
};
