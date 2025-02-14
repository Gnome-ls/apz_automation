it('learn assertion', function() {
    cy.visit('https://example.cypress.io/');
    cy.wait(2000);
    cy.contains('get').click();
    //Afirmaciones implicitas
    //assertion should
    cy.get('#query-btn')
    .should('contain', 'Button')
    //assertion should have class
    .should('have.class', 'query-btn btn btn-primary')
    //should be
    .should('be.visible')
    .should('be.enabled')
    //.should('be.disabled')

    cy.get('#query-btn')
    .invoke('attr', 'id')
    .should('equal', 'query-btn')

    cy.get('#query-btn')
    .should('contain', 'Button')
    .and ('have.class', 'query-btn btn btn-primary')

    //Afirmaciones explicitas
    //expect
    expect(true).to.be.true

    let name = 'Mauricio'
    expect(name).to.be.equal('Mauricio')

    //assert
    assert.equal(3, 3, 'Not equal')
    //assert.equal(1, 2, 'Not equal')
    assert.strictEqual(name, 'mauricio', 'No son exactamente iguales')



})