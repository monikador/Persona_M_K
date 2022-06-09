export class DownloadPdfPopUpPage {
    fullNameInput() { return cy.get('[name="fullname"]') }
    roleDropdown() { return cy.get('[name="role"]') }
    companyInput() { return cy.get('[name="company"]') }
    yourEmailInput() { return cy.get('[name="email"]') }
    agreementCheckbox() { return cy.get('[name="isTermsAccepted"]') }
    agreementLabel() { return cy.get('.inSiWw') }
    sendButton() { return cy.get('#submit-newsletter-modal') }
    emailValidationInfo() { return cy.get('.dNYcbz') }
    correctDownloadText() { return cy.get('.fzFUey').find('.fhLmel'/*, {timeout:6000}*/) }
    agreementValidationInfo() { return cy.get('.dNYcbz').contains('Required') }

    fillName() {
        this.fullNameInput().type('Adam')
    }
    selectRole(role) {
        this.roleDropdown().select(role)
    }
    fillCompany() {
        this.companyInput().type('SDH')
    }
    fillEmail() {
        this.yourEmailInput().type(cy.fakeLibrary.faker.internet.email())
    }
    selectAgreement() {
        this.agreementLabel().click()
    }
    clickSend() {
        this.sendButton().click()
    }
}
