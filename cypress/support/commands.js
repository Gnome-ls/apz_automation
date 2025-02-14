// cypress/support/commands.js
Cypress.Commands.add('highlight', { prevSubject: 'element' }, (element) => {
    // Guarda el estilo original del elemento
    const originalStyles = element.css([
      'background-color',
      'border',
      'box-shadow',
      'outline',
    ]);
  
    // Aplica estilos para resaltar el elemento
    element.css({
      'background-color': 'yellow',
      'border': '2px solid red',
      'box-shadow': '0 0 10px rgba(255, 0, 0, 0.5)',
      'outline': '2px dashed blue',
    });
  
    // Restaura los estilos originales después de 2 segundos
    cy.wait(2000).then(() => {
      element.css(originalStyles);
    });
  });