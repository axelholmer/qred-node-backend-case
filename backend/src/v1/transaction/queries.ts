import db from "../infra/database/db";
import { TransactionModel } from "./model";


export const getTransactionsByCardId = async (
  cardId: string
): Promise<TransactionModel[]> => {
  const query = "SELECT * FROM transactions WHERE card_id = $1;";

  const values: string[] = [cardId];
  const results = await db.query<TransactionModel>(query, values);
  return results;
};