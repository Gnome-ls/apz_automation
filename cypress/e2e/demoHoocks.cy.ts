describe('Demo hooks', function() {

    before(function() {
        cy.log('Before')
    })

    beforeEach(function() {
        cy.log('Before each')
    })
    it('Test 1', function() {
        console.log('Test 1')
    })

    it.skip('Test 2', function() {
        console.log('Test 2')
    })

    /*
    it.only('Test 2', function() {
        console.log('Test 2')
    })
    */

    it('Test 3', function() {
        console.log('Test 3')
    })

    afterEach(function() {
        cy.log('After each')
    })

    after(function() {
        cy.log('After')
    })
});