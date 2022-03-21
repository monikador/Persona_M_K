
export class MainPage {

    buildPersonaButton() { return cy.get('.gdWsuk') }

    open() { return cy.visit("https://persona-generator-front.herokuapp.com") }

    openPersonaPage() { return this.buildPersonaButton().click() }


}