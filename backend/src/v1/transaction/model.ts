import { Model } from "../common/models/base.model";

export interface TransactionModel extends Model {
  card_id: string;
  transaction_date: string;
  amount: number;
  currency: string;
  description: string;
}
