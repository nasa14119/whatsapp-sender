import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
const sql = new Database(process.env.DB_CONTACT_PATH);
export const db = drizzle({ client: sql });
