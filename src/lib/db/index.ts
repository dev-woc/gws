import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// biome-ignore lint/style/noNonNullAssertion: DATABASE_URL must be set at runtime
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
