import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/db/schema",
  out: "./src/lib/db/migrations",
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: 'wrangler.toml',
    dbName: 'db',
  },
} satisfies Config;