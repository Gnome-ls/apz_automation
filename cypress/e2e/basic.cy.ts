it ('google test', function() {
    cy.visit('https://www.google.com/');
    cy.get('#APjFqb') //cy.get('input[name="q"]')
    .type('Linkedin Mauricio Eslava Mateo').type('{enter}');
});