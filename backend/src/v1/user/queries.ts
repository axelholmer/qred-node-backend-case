import db from "../infra/database/db";
import { UserModel } from "./model";

export const getUsers = async (): Promise<UserModel[]> => {
  const query = "SELECT * FROM users;";
  const results = await db.query<UserModel>(query);
  return results;
};

export const getUserById = async (
  userId: string
): Promise<UserModel | null> => {
  const query = "SELECT * FROM users WHERE id = $1;";

  const values: string[] = [userId];
  const results = await db.query<UserModel>(query, values);
  return results.length ? results[0] : null;
};
