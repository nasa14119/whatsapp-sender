import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
const sql = new Database("./contacts.db");
export const db = drizzle({ client: sql });
