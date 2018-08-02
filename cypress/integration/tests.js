context('Tests', () => {
    it('.should() - pass all tests', function () {
        
        cy.visit('https://sommstudy-631bd.firebaseapp.com/main')
        cy.title().should('include', 'SommStudy')
        cy.get('.pages div').eq(4).should('have.text', 'Add a Region')
        cy.get('.country').should('have.length.above', '8')
        cy.get('.region').eq(0).children().should('have.length', '6')
    })
})