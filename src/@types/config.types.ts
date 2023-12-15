import { z } from "zod";

export const appConfigSchema = z.object({
    port: z.number({ coerce: true }),
    debug: z.boolean(),
});

export const databaseConfigSchema = z.object({
    url: z.string(),
});

export const rootConfigSchema = z.object({
    app: appConfigSchema,
    database: databaseConfigSchema,
});

export type rootConfig = z.infer<typeof rootConfigSchema>;