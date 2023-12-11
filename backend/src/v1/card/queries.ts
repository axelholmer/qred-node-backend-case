import db from "../infra/database/db";
import { CardModel } from "./model";

export const getCardById = async (
  cardId: string
): Promise<CardModel | null> => {
  const query = "SELECT * FROM cards WHERE id = $1;";

  const values: string[] = [cardId];
  const results = await db.query<CardModel>(query, values);
  return results.length ? results[0] : null;
};

export const getCardsByCompanyId = async (
  companyId: string
): Promise<CardModel[]> => {
  const query = "SELECT * FROM cards WHERE id = $1;";

  const values: string[] = [companyId];
  const results = await db.query<CardModel>(query, values);
  return results;
};

