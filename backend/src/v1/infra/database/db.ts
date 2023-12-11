// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  database,
  user,
  password,
  host,
} = require("../../../../secrets/db-credentials.json");
import { Pool } from "pg";

class Db {
  pool: Pool;
  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST || host,
      database,
      user,
      password,
    });
    this.init();
    this.pool.on("error", (error) => {
      console.log(error);
      this.init();
    });
  }

  async init() {
    try {
      const client = await this.pool.connect();
      await client.query("SELECT NOW()");
      client.release();
      console.log("DB connection is up");
    } catch (error) {
      console.log(`Error connecting to db error:${error}`);
    }
  }

  async query<T>(query: string, value: string[] = []): Promise<T[]> {
    try {
      const { rows } = await this.pool.query(query, value);
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error querying db query:${query} error:${error.message}`);
        throw error;
      }
      console.log(`Error querying db query:${query} error:${error}`);
      throw error;
    }
  }
}

export default new Db();
