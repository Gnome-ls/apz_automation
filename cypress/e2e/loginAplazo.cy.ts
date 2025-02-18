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

    it.skip('Capturar OTP incorrecto', () => { 
        cy.otpCustomerError();
    })

    it.skip('Validar OTP Correcto y panel customer', () => { 
        cy.otpCustomer();
        cy.dashboardCustomer();
        cy.dashboardCustomerMenu();
        cy.dashboard();
    })

    it.skip('Entrar a Pefil', () => { 
        cy.otpCustomer();
        cy.dashboardCustomer();
        cy.Perfil();
        cy.perfilInformacion();
    })

    it('Entrar a Pefil y agregar método de pago', () => { 
        cy.otpCustomer();
        cy.dashboardCustomer();
        cy.Perfil();
        cy.perfilMetodoPago();
        cy.agregarTarjeta();
    })

});