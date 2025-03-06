import { defineConfig } from "cypress";
import dotenv from "dotenv";

// Carregar o arquivo .env
dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Passando as variáveis para o Cypress
      config.env.LOGIN_USERNAME = process.env.CYPRESS_LOGIN_USERNAME;
      config.env.LOGIN_PASSWORD = process.env.CYPRESS_LOGIN_PASSWORD;
      config.env.LOGIN_PASSWORD_FAIL = process.env.CYPRESS_LOGIN_PASSWORD_FAIL;
      config.env.CREATE_USERNAME = process.env.CYPRESS_CREATE_USERNAME;
      config.env.CREATE_PASSWORD = process.env.CYPRESS_CREATE_PASSWORD;
      config.env.LOGIN_ADMIN_USERNAME =
        process.env.CYPRESS_LOGIN_ADMIN_USERNAME;
      config.env.LOGIN_ADMIN_PASSWORD =
        process.env.CYPRESS_LOGIN_ADMIN_PASSWORD;

      return config;
    },
    baseUrl: "http://localhost:3000",
  },
});
