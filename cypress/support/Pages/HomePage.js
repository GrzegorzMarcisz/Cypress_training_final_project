export default class HomePage {

    
    verify() {
        cy.get('h1').should('have.text', 'Cypress  training site')
        cy.get('#value').should('be.visible')
        cy.get('.dont_click').should('be.visible')
    }

    clickDontClick() {
        cy.get('.dont_click').click()
    }


    clickClickMe() {
        cy.get('#click').click()
    }

    typeInput(inputValue) {
        cy.get('#value').type(inputValue)
    }
}

