import { Model } from "../common/models/base.model";

export interface InvoiceModel extends Model {
  company_id: string;
  due_date: string;
  amount: number;
  currency: string;
  paid_at: string | null;
}
