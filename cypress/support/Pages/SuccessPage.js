export default class SuccessPage {

    verifyValue(inputValue) {

        cy.get('#result').should('have.text', inputValue)

    }

}