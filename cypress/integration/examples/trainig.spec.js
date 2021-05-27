import HomePage from '../../support/Pages/HomePage'
import ErrorPage from '../../support/Pages/ErrorPage'
import SuccessPage from '../../support/Pages/SuccessPage'


describe('Cypress training', () => {

  const homePage = new HomePage
  const errorPage = new ErrorPage
  const successPage = new SuccessPage

  beforeEach( () => {
    cy.visit('/')
  })


  it('1st test', () => {

    homePage.verify()

  })

  it('2st test', () => {

    homePage.verify()
    homePage.clickDontClick()
    errorPage.verify()
  })

  it('3rd test', () => {
    homePage.verify()
    homePage.typeInput(Cypress.env("value"))
    homePage.clickClickMe()
    successPage.verifyValue(Cypress.env("value"))
  })

})
