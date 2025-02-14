import { SELECTORS } from '../selectors/selectors';
import '../support/commands.ts';

describe('Prueba de inicio de sesión en APLAZO', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('loginAplazoUrl',));
        //cy.contains('Iniciar sesión')
        cy.get(SELECTORS.TITLE_LOGIN, { timeout: 2000 })    
        .should('have.text','Inicia sesión') // Aumenta el tiempo de espera a 2 segundos

        cy.loginCustomerAplazo();
        cy.otpCustomerValidation();
    })

    it('Capturar OTP incorrecto', () => { 
        cy.otpCustomerError();
    })

    it.skip('Validar OTP Correcto y panel customer', () => { 
        cy.otpCustomer();
        cy.dashboardCustomer();
    })

});