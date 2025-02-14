import { defineConfig } from "cypress";
//WSSconst config = require('cypress.env.json');



export default defineConfig({
  env: {
    loginAplazoUrl:'https://customer.aplazo.net/login/credentials',
    loginVerifyCode: 'https://customer.aplazo.net/login/verify-code',
    panelCustomer: 'https://customer.aplazo.net/dashboard/panel'
  },
  e2e: {
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
