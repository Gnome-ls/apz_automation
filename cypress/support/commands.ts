/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import { SELECTORS } from '../selectors/selectors';

export {}; // Convierte el archivo en un módulo

declare global {
    namespace Cypress {
        interface Chainable {
            loginCustomerAplazo(): void; // Added
            otpCustomerValidation(): void; // Added
            otpCustomer(): void; //
            dashboardCustomer(): void; // Added
            dashboardCustomerMenu(): void; // Added
            otpCustomerError(): void; // Added
            loginCustomerAplazoNoExist(): void; // Added
        }
    }
}

Cypress.Commands.add('loginCustomerAplazo', () => {
    // Paso 1: Ingresar login y presionar botón CONTINUAR
    cy.get(SELECTORS.LOGIN_CUSTOMER)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('be.empty'); // Asegúrate de que el elemento esté vacío

    cy.get(SELECTORS.BTN_CONTINUAR_LOGIN)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('be.disabled'); // Asegúrate de que el elemento esté deshabilitado

    cy.get(SELECTORS.LOGIN_CUSTOMER)
        .type(Cypress.env('loginCustomer')); // Usa la variable de entorno

    cy.get(SELECTORS.BTN_CONTINUAR_LOGIN)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('not.be.disabled') // Asegúrate de que el botón esté habilitado
        .click(); // Haz clic en el elemento
});

Cypress.Commands.add('loginCustomerAplazoNoExist', () => {
    // Paso 1: Ingresar login y presionar botón CONTINUAR
    cy.get(SELECTORS.LOGIN_CUSTOMER)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('be.empty'); // Asegúrate de que el elemento esté vacío

    cy.get(SELECTORS.BTN_CONTINUAR_LOGIN)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('be.disabled'); // Asegúrate de que el elemento esté deshabilitado

    cy.get(SELECTORS.LOGIN_CUSTOMER)
        .type(Cypress.env('loginCustomerNoExist')); // Usa la variable de entorno

    cy.get(SELECTORS.BTN_CONTINUAR_LOGIN)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('not.be.disabled') // Asegúrate de que el botón esté habilitado
        .click(); // Haz clic en el elemento
});

Cypress.Commands.add('otpCustomerValidation', () => {
    cy.contains('Verifica tu teléfono', { timeout: 1000 }) // Aumenta el tiempo de espera a 2 segundos

    cy.get(SELECTORS.BTN_OTP_REGRESAR)
    .should('be.visible') // Asegúrate de que el elemento sea visible
    .and('have.text', ' Regresar\n') // Asegúrate de que el elemento tenga el texto 'Regresar'
    
    const verifyButton = (selector: string, text: string) => {
        cy.get(selector)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('be.disabled') // Asegúrate de que el elemento esté deshabilitado
        .and('have.text', text) // Asegúrate de que el elemento tenga el texto 'Enviar por WhatsApp'

        cy.get(selector, { timeout: 6000 })
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('be.disabled') // Asegúrate de que el elemento esté deshabilitado
    }

    verifyButton(SELECTORS.BTN_SEND_OTP_WHATSAPP, ' ENVIAR CÓDIGO POR WHATSAPP\n');
    verifyButton(SELECTORS.BTN_SEND_OTP_SMS, ' ENVIAR CÓDIGO NUEVO\n');
    verifyButton(SELECTORS.BTN_OTP_VERIFICATION, ' Verificar\n');

});

Cypress.Commands.add('otpCustomer', () => {
    const verifyButtonOtp = (selector: string, text: string) => {
        cy.get(selector)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('be.empty')
        .type(text)
    }
    verifyButtonOtp(SELECTORS.BTN_OTP_01, '1');
    verifyButtonOtp(SELECTORS.BTN_OTP_02, '2');
    verifyButtonOtp(SELECTORS.BTN_OTP_03, '3');
    verifyButtonOtp(SELECTORS.BTN_OTP_04, '4');
    verifyButtonOtp(SELECTORS.BTN_OTP_05, '5');
    verifyButtonOtp(SELECTORS.BTN_OTP_06, '6');
}); // Added  

Cypress.Commands.add('otpCustomerError', () => {
    const verifyButtonOtp = (selector: string, text: string) => {
        cy.get(selector)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('be.empty')
        .type(text)
    }
    verifyButtonOtp(SELECTORS.BTN_OTP_01, '0');
    verifyButtonOtp(SELECTORS.BTN_OTP_02, '2');
    verifyButtonOtp(SELECTORS.BTN_OTP_03, '3');
    verifyButtonOtp(SELECTORS.BTN_OTP_04, '4');
    verifyButtonOtp(SELECTORS.BTN_OTP_05, '5');
    verifyButtonOtp(SELECTORS.BTN_OTP_06, '6');

    cy.get(SELECTORS.BTN_OTP_VERIFICATION, { timeout: 20000 })
    .should('be.visible') // Asegúrate de que el elemento sea visible
    .and('not.be.disabled') // Asegúrate de que el botón esté habilitado

    cy.get(SELECTORS.BTN_OTP_06, { timeout: 10000 })
    .type('{backspace}')

    cy.log('Buscando el elemento: ' + SELECTORS.LBL_FIELD_NECESSARY);
    cy.get(SELECTORS.LBL_FIELD_NECESSARY, { timeout: 10000 }).then(($title) => {
        cy.log('Elemento encontrado. Verificando visibilidad...');
        if ($title.length > 0 && $title.is(':visible')) {
            cy.wrap($title)
                .should('have.text', ' Este campo es necesario ')
                .and('be.visible');
            cy.log('El título está visible');
        } else {
            cy.wrap($title).should('not.be.visible');
            cy.log('Se muestra error de máximo de intentos');
        }
    }).then(() => {
        cy.log('Proceso completado.');
    });

}); // Added  


Cypress.Commands.add('dashboardCustomer', () => {
    cy.get(SELECTORS.PANEL_TITLE, { timeout: 6000 })
    .should('be.visible') // Asegúrate de que el elemento sea visible
    .and('have.text', ' Panel ') // Asegúrate de que el elemento tenga el texto 'Panel'
});

Cypress.Commands.add('dashboardCustomerMenu', () => {
    const verifyButton = (selector: string, text: string) => {
        cy.get(selector)
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('have.text', text) // Asegúrate de que el elemento tenga el texto 'Panel'
    }

    verifyButton(SELECTORS.PANEL, ' Panel ');
    verifyButton(SELECTORS.PERFIL, ' Perfil ');
    verifyButton(SELECTORS.AYUDA, 'Ayuda');
    verifyButton(SELECTORS.CREDITO_DISPONIBLE, 'CRÉDITO DISPONIBLE');

}); // Added