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
import { add } from 'cypress/types/lodash';
import { SELECTORS } from '../selectors/selectors';
import 'cypress-iframe';
import 'cypress-wait-until'
import cypress from 'cypress';

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
            dashboard(): void; // Added
            Perfil(): void; // Added
            perfilInformacion(): void; // Added
            perfilMetodoPago(): void; // Added
            agregarTarjeta(): void; // Added
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
    cy.get(SELECTORS.PANEL_TITLE, { timeout: 10000 })
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

}); // Added

Cypress.Commands.add('dashboard', () => {
    const verifyButton = (selector: string, text: string) => {
        cy.get(selector)
        .scrollIntoView()
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('have.text', text) // Asegúrate de que el elemento tenga el texto 'Panel'
    }

    verifyButton(SELECTORS.CREDITO_DISPONIBLE, 'CRÉDITO DISPONIBLE');
    verifyButton(SELECTORS.LIMITE_CREDITO, 'LÍMITE DE CRÉDITO');
    verifyButton(SELECTORS.DESCUBRE_DONDE_COMPRAR, 'Descubre dónde comprar');
    verifyButton(SELECTORS.FILTRO_EN_PROGRESO, ' En progreso arrow_drop_down');

});

Cypress.Commands.add('Perfil', () => {
    cy.get(SELECTORS.PERFIL)
    .scrollIntoView()
    .should('be.visible') // Asegúrate de que el elemento sea visible
    .and('have.text', ' Perfil ') // Asegúrate de que el elemento tenga el texto 'Panel'    
    .click();

}); // Added

Cypress.Commands.add('perfilInformacion', () => {
    const verifyInformation = (selector: string, text: string) => {
        cy.get(selector, { timeout: 5000 })
        .scrollIntoView()
        .should('be.visible') // Asegúrate de que el elemento sea visible
        .and('have.text', text) // Asegúrate de que el elemento tenga el texto 'Panel'
    }

    verifyInformation(SELECTORS.LBL_INFORMACION, 'INFORMACIÓN');
    verifyInformation(SELECTORS.LBL_PERFIL, ' Perfil ');
    verifyInformation(SELECTORS.LBL_INFORMACION_PERSONAL, 'Información Personal');
    verifyInformation(SELECTORS.LBL_DIRECCION, 'Dirección');
    verifyInformation(SELECTORS.LBL_INFORMACION, 'INFORMACIÓN');
    verifyInformation(SELECTORS.LBL_METODO_PAGO, 'MÉTODO DE PAGO');

}); // Added

Cypress.Commands.add('perfilMetodoPago', () => {
    cy.get(SELECTORS.LBL_METODO_PAGO)
    .scrollIntoView()
    .should('be.visible') // Asegúrate de que el elemento sea visible
    .and('have.text', 'MÉTODO DE PAGO') // Asegúrate de que el elemento tenga el texto 'Panel'    
    .click();
}); // Added

Cypress.Commands.add('agregarTarjeta', () => {

    cy.get(SELECTORS.LBL_TARJETA_ACTUAL, {timeout:2000})
        .should('be.visible')
        .invoke('text')
        .then((cardText) => {
            if(cardText.trim() === '••• 4444'){
                cy.get(SELECTORS.BTN_AGREGAR_METODO_PAGO)
                    .should('be.visible') // Asegúrate de que el elemento sea visible
                    .and('have.text', ' REEMPLAZAR MÉTODO DE PAGO\n') // Asegúrate de que el elemento tenga el texto 'Panel'
                    .click();
                cy.get(SELECTORS.APLAZO_HEADER_LOGO, { timeout: 5000 })
                    .should('be.visible') // Asegúrate de que el elemento sea visible
                    const verifyAddCard = (selector: string, text: string) => {
                        cy.get(selector, { timeout: 5000 })
                        .scrollIntoView()
                        .should('be.visible') // Asegúrate de que el elemento sea visible
                        .and('have.text', text) // Asegúrate de que el elemento tenga el texto 'Panel'
                    }
                
                    verifyAddCard(SELECTORS.LBL_DOMICILIA_TARJETA, 'Domicilia tu tarjeta');
                    verifyAddCard(SELECTORS.LBL_SUGERENCIA_AGREGAR_TARJETA_01, 'Con esta tarjeta se hará el primer pago de tu compra y los pagos siguientes');
                    verifyAddCard(SELECTORS.LBL_SUGERENCIA_AGREGAR_TARJETA_02, 'Te sugerimos usar la tarjeta donde recibes tu nómina para que siempre tengas saldo disponible');
                    verifyAddCard(SELECTORS.LBL_TITULAR_TARJETA, 'Titular de la tarjeta');
                    verifyAddCard(SELECTORS.LBL_NUMERO_TARJETA, 'Número de tarjeta');
                    verifyAddCard(SELECTORS.LBL_VENCIMIENTO, 'Vencimiento');
                    verifyAddCard(SELECTORS.LBL_CVV, 'Código de seguridad');
                    verifyAddCard(SELECTORS.BTN_REEMPLAZAR, ' Reemplazar\n');
                    verifyAddCard(SELECTORS.LBL_INFORMATIVA, ' Pagos y transacciones 100% seguras y con encriptación SSL ');
                    const addCard =  (selector: string, text: string) => {
                        cy.get(selector, { timeout: 5000 })
                            .should('be.visible') // Asegúrate de que el elemento sea visible
                            .type(text)
                    }
                
                    addCard(SELECTORS.TXT_TITULAR, Cypress.env('customerName'));

                    cy.get(SELECTORS.IFRAME_CARD, { timeout: 20000 })
                        .should('exist')
                        .then(($iframe) => {
                            cy.waitUntil(
                                () => Cypress.$($iframe[0]).prop('contentDocument')?.body !== null,
                                { timeout: 10000, interval: 200 }
                            ).then(() => {
                                cy.wrap($iframe)
                                    .its('0.contentDocument.body')
                                    .should('not.be.empty')
                                    .then(($body) => {
                                        const bodyElement = Cypress.$($body);
                                        console.log(bodyElement.html());
                                        cy.wrap(bodyElement)
                                            .find(SELECTORS.TXT_CARD)
                                            .should('exist')
                                            .type(Cypress.env('card_visa'))
                                    });
                            });
                        });

                    cy.get(SELECTORS.IFRAME_EXPIRATION, { timeout: 20000 })
                        .should('exist')
                        .then(($iframe) => {
                            cy.waitUntil(
                                () => Cypress.$($iframe[0]).prop('contentDocument')?.body !== null,
                                { timeout: 10000, interval: 200 }
                            ).then(() => {
                                cy.wrap($iframe)
                                    .its('0.contentDocument.body')
                                    .should('not.be.empty')
                                    .then(($body) => {
                                        const bodyElement = Cypress.$($body);
                                        console.log(bodyElement.html());
                                        cy.wrap(bodyElement)
                                            .find(SELECTORS.TXT_EXPIRATION)
                                            .should('exist')
                                            .and('be.visible')
                                            .type(Cypress.env('date_expiration'))
                                    });
                            });
                    });

                    cy.get(SELECTORS.IFRAME_CVV, { timeout: 20000 })
                        .should('exist')
                        .then(($iframe) => {
                            cy.waitUntil(
                                () => Cypress.$($iframe[0]).prop('contentDocument')?.body !== null,
                                { timeout: 10000, interval: 200 }
                            ).then(() => {
                                cy.wrap($iframe)
                                    .its('0.contentDocument.body')
                                    .should('not.be.empty')
                                    .then(($body) => {
                                        const bodyElement = Cypress.$($body);
                                        console.log(bodyElement.html());
                                        cy.wrap(bodyElement)
                                            .find(SELECTORS.TXT_CVV)
                                            .should('exist')
                                            .type(Cypress.env('cvv'))
                                    });
                            });
                    });

                    const clickBtnReemplazar =  (selector: string) => {
                        cy.get(selector, { timeout: 3000 })
                            .should('be.visible') // Asegúrate de que el elemento sea visible
                            .should('not.be.disabled')
                            .click()
                    }
                
                    clickBtnReemplazar(SELECTORS.BTN_REEMPLAZAR);
                
                    cy.get('canvas')
                        .then(($canvas) => {
                            if ($canvas.is(':visible')) {
                                cy.log('El canvas está visible. Esperando 3 segundos...');
                                cy.wait(20000); // Espera 3 segundos
                            } else {
                                cy.log('El canvas no está visible. Continuando sin esperar...');
                            }
                    })
                    .then(() => {
                        cy.get(SELECTORS.LBL_METODO_PAGO)
                            .should('be.visible')
                            .click();
                    });
            } else {
                cy.get(SELECTORS.BTN_AGREGAR_METODO_PAGO)
                    .should('be.visible') // Asegúrate de que el elemento sea visible
                    .and('have.text', ' REEMPLAZAR MÉTODO DE PAGO\n') // Asegúrate de que el elemento tenga el texto 'Panel'
                    .click();
                cy.get(SELECTORS.APLAZO_HEADER_LOGO, { timeout: 3000 })
                    .should('be.visible') // Asegúrate de que el elemento sea visible
                    const verifyAddCard = (selector: string, text: string) => {
                        cy.get(selector, { timeout: 5000 })
                        .scrollIntoView()
                        .should('be.visible') // Asegúrate de que el elemento sea visible
                        .and('have.text', text) // Asegúrate de que el elemento tenga el texto 'Panel'
                    }
                
                    verifyAddCard(SELECTORS.LBL_DOMICILIA_TARJETA, 'Domicilia tu tarjeta');
                    verifyAddCard(SELECTORS.LBL_SUGERENCIA_AGREGAR_TARJETA_01, 'Con esta tarjeta se hará el primer pago de tu compra y los pagos siguientes');
                    verifyAddCard(SELECTORS.LBL_SUGERENCIA_AGREGAR_TARJETA_02, 'Te sugerimos usar la tarjeta donde recibes tu nómina para que siempre tengas saldo disponible');
                    verifyAddCard(SELECTORS.LBL_TITULAR_TARJETA, 'Titular de la tarjeta');
                    verifyAddCard(SELECTORS.LBL_NUMERO_TARJETA, 'Número de tarjeta');
                    verifyAddCard(SELECTORS.LBL_VENCIMIENTO, 'Vencimiento');
                    verifyAddCard(SELECTORS.LBL_CVV, 'Código de seguridad');
                    verifyAddCard(SELECTORS.BTN_REEMPLAZAR, ' Reemplazar\n');
                    verifyAddCard(SELECTORS.LBL_INFORMATIVA, ' Pagos y transacciones 100% seguras y con encriptación SSL ');
                const addCard =  (selector: string, text: string) => {
                    cy.get(selector, { timeout: 5000 })
                        .should('be.visible') // Asegúrate de que el elemento sea visible
                        .type(text)
                    }
                
                    addCard(SELECTORS.TXT_TITULAR, Cypress.env('customerName'));

                    cy.get(SELECTORS.IFRAME_CARD, { timeout: 20000 })
                        .should('exist')
                        .then(($iframe) => {
                            cy.waitUntil(
                                () => Cypress.$($iframe[0]).prop('contentDocument')?.body !== null,
                                { timeout: 10000, interval: 200 }
                            ).then(() => {
                                cy.wrap($iframe)
                                    .its('0.contentDocument.body')
                                    .should('not.be.empty')
                                    .then(($body) => {
                                        const bodyElement = Cypress.$($body);
                                        console.log(bodyElement.html());
                                        cy.wrap(bodyElement)
                                            .find(SELECTORS.TXT_CARD)
                                            .should('exist')
                                            .type(Cypress.env('card_mastercard'))
                                    });
                            });
                        });

                    cy.get(SELECTORS.IFRAME_EXPIRATION, { timeout: 20000 })
                        .should('exist')
                        .then(($iframe) => {
                            cy.waitUntil(
                                () => Cypress.$($iframe[0]).prop('contentDocument')?.body !== null,
                                { timeout: 10000, interval: 200 }
                            ).then(() => {
                                cy.wrap($iframe)
                                    .its('0.contentDocument.body')
                                    .should('not.be.empty')
                                    .then(($body) => {
                                        const bodyElement = Cypress.$($body);
                                        console.log(bodyElement.html());
                                        cy.wrap(bodyElement)
                                            .find(SELECTORS.TXT_EXPIRATION)
                                            .should('exist')
                                            .and('be.visible')
                                            .type(Cypress.env('date_expiration'))
                                    });
                            });
                    });

                    cy.get(SELECTORS.IFRAME_CVV, { timeout: 20000 })
                        .should('exist')
                        .then(($iframe) => {
                            cy.waitUntil(
                                () => Cypress.$($iframe[0]).prop('contentDocument')?.body !== null,
                                { timeout: 10000, interval: 200 }
                            ).then(() => {
                                cy.wrap($iframe)
                                    .its('0.contentDocument.body')
                                    .should('not.be.empty')
                                    .then(($body) => {
                                        const bodyElement = Cypress.$($body);
                                        console.log(bodyElement.html());
                                        cy.wrap(bodyElement)
                                            .find(SELECTORS.TXT_CVV)
                                            .should('exist')
                                            .type(Cypress.env('cvv'))
                                    });
                            });
                    });

                    const clickBtnReemplazar =  (selector: string) => {
                        cy.get(selector, { timeout: 3000 })
                            .should('be.visible') // Asegúrate de que el elemento sea visible
                            .should('not.be.disabled')
                            .click()
                    }
                
                    clickBtnReemplazar(SELECTORS.BTN_REEMPLAZAR);
                
                    cy.get('canvas')
                        .then(($canvas) => {
                        if ($canvas.is(':visible')) {
                            cy.wait(20000); 
                        } else {
                            cy.log('El canvas no está visible. Continuando sin esperar...');
                        }
                    })
                    .then(() => {
                        cy.get(SELECTORS.LBL_METODO_PAGO)
                            .should('be.visible')
                            .click();
                    });
            }
        })
}); // Added