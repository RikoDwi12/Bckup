import { appConfigSchema } from "src/@types/config.types";
import { validateConfig } from "./validator";


export const appConfig = () =>
  validateConfig('app', appConfigSchema, {
    port: process.env.PORT,
    debug: process.env.DEBUG ? process.env.DEBUG == 'true' : true,
  });
