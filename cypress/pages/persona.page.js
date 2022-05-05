export class PersonaPage {

    createNewButton() { return cy.get('.VIGzK') }
    uploadPhotoButton() { return cy.get('#file') } 
    fullNameInput() { return cy.get('.idurmu') }
    occupationInput() { return cy.get('.gnoDdO') }
    ageInput() { return cy.get('.dIEcLd') }
    sexInput() { return cy.get('#react-select-2-input') }
   // sexSelect() { return cy.get('#react-select-2-option-0') }
    sexSelect2(select) { return cy.get('div[id*="react-select-2"]').contains(`${select}`) }
    locationInput() { return cy.get('[name="location"]') }
    companySizeDropdown() { return cy.get('#react-select-3-input') }
    personaTitleInput() { return cy.get('.knrQfT') }
    negativeTrendsInput() { return cy.get('#react-select-6-input') }
    negativeTrendsArea() { return cy.get('.frjSRX') }
    negativeTrendsRemoveButton() { return this.negativeTrendsArea().find('.css-xb97g8') }
    //xx() { return cy.get(".frjsrx").find('.css-xb') }
    industryInput() { return cy.get('[name="industry"]') }
    educationInput() { return cy.get('#react-select-4-input') }
    familyStatusInput() { return cy.get('#react-select-5-input') }
    
    /*fillFullNameInput(fullName) { return this.fullNameInput().type(fullName) } 
    fillOccupation(occupation) { return this.occupationInput().type(occupation) }

    fillPersonaData(fullName, occupation) {
        this.fillFullNameInput(fullName)
        this.fillOccupation(occupation)
    }*/

    addFile() {
        this.uploadPhotoButton().attachFile('../testData/photo.jpeg');
    }

    fillPersonaData(select, companySize = "<50", education, familyStatus ) { //jeśli w teście nie podam, by została wprowadzona w input losowa wartość to wprowadzi się '<50'.
        this.fullNameInput().type('Monika')
        this.occupationInput().type('QA')
        this.ageInput().type('54')
        this.sexInput().click()
       // this.sexSelect().click()
        this.sexSelect2(select).click()
        this.locationInput().type(cy.fakeLibrary.faker.address.city())
        this.companySizeDropdown().click()
        this.companySizeDropdown().type(companySize).type('{enter}')
        this.industryInput().type(cy.fakeLibrary.faker.address.city()) //!!!
        //this.industryInput().click()
        this.educationInput().click()
        this.educationInput().type(education).type('{enter}')
        this.familyStatusInput().click()
        this.familyStatusInput().type(familyStatus).type('{enter}')
     }

     fillTitledata() {
        this.personaTitleInput().type(cy.fakeLibrary.faker.name.jobTitle())
     }

     fillTrendsData() {
         this.negativeTrendsInput().type(cy.fakeLibrary.faker.animal.type()).type('{enter}')
         this.negativeTrendsInput().click
     }

     ////fillIndustryData() {
       //  this.industryInput().type(cy.fakeLibrary.faker.company.bs())
     //}

     cleanData() {
         this.createNewButton().click()
     }
}