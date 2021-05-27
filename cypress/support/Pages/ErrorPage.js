export default class ErrorPage {

    verify() {
        cy.get('h2').contains('ERROR!').should('be.visible')
    }
}