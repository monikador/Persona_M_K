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
    downloadPdfButton() { return cy.get('.kzcgIp') }
    pdfValidationInfo() { return cy.get('.icVnTA') }
    skillsModal() { return cy.get('.ViOIT') }
    addSkillButton() { return cy.get('.kVgWUh') }
    removeSkillButton() { return this.skillsModal().find('.jDpGYr') } //miałam kilka elementów o takiej samej klasie itp. Podałam ze pierwszy ma się usunąć
    skillsList() { return this.skillsModal().find('.eXeuib') }
    skillsValuelButton() { return cy.get('.bumlOz').find('.iHieLf').eq(0) }
    skillNameInput() { return cy.get('.eXeuib').eq(0) }
    reachModal() { return cy.get('.dGnumD').eq(0) }
    reachList() { return this.reachModal().find('.fCzdIm') }
    reachValueButton() { return cy.get('.bumlOz').find('[name="reach[2].value"]') }
    reachRemoveButton() { return this.reachModal().find('.jDpGYr') }
    reachAddButton() { return this.reachModal().find('.kVgWUh') }
    reachAddList() { return cy.get('.css-11unzgr').eq(0) }
    motivationToBuyModal() { return cy.get('.dGnumD').eq(1) }
    motivationToBuyList() { return this.motivationToBuyModal().find('.fCzdIm') }
    motivationToBuyRemoveButton() { return this.motivationToBuyModal().find('.jDpGYr') }
    motivationToBuyAddButton() {return this.motivationToBuyModal().find('.kVgWUh') }
    motivationToBuyAddList() { return cy.get('.css-11unzgr').eq(0) }
    
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
     openDownloadPDFModal() {
         this.downloadPdfButton().click().click()
     }
     addSkill() {
         this.addSkillButton().click()
     }
     deleteSkill() {
         this.removeSkillButton().eq(0).click({force: true})
     }
     deleteRandomSkill(indexToRemove) {
        this.removeSkillButton().eq(indexToRemove).click({force: true})
     }
     changeSkillValue() { //slider 
         this.skillsValuelButton().as('range').invoke('val', 30).trigger('change')
     }
     changeSkillName() {
         this.skillNameInput().type('New name')
         this.skillsModal().click()
     }
     countSkills() {
         return this.skillsList().its('length')
     }
     increaseReachValue() {
         this.reachValueButton().invoke('attr','max').then(value => 
            { this.reachValueButton().invoke('val', value ).trigger('change') })
     }
     decreaseReachValue() {
         this.reachValueButton().invoke('val', -125 ).trigger('change')
     }
     changeReachValue(randomReachValue, mathOperator) {
         const valueOfChange = mathOperator === 'plus' ? 125 + randomReachValue : 125 - randomReachValue
         this.reachValueButton().invoke('val', valueOfChange).trigger('change')
     }
     countMotivationToBuy() {
        return this.motivationToBuyList().its('length')
     }
     deleteRandomMotivationToBuy(indexToRemove) {
        this.motivationToBuyRemoveButton().eq(indexToRemove).click({force: true})
     }
     countReach() {
        return this.reachList().its('length')
     }
     deleteRandomReach(indexToRemove) {
        this.reachRemoveButton().eq(indexToRemove).click({force: true})
     }
     reachAddButtonClick() {
        this.reachAddButton().click()
        this.reachAddList().click()
     }
     motivationToBuyAddButtonClick() {
        this.motivationToBuyAddButton().click()
        this.motivationToBuyAddList().click() 
     }
     addRandomReach(numberOfReach) {
        if (numberOfReach >= 6) {
            this.deleteRandomReach(0)
        }
            this.reachAddButtonClick()
     }
     //to co powyej mogę zapisać te tak jak tutaj
     addRandomMotivationYoBuy(numberOfMotivations) {
        if (numberOfMotivations < 5) {
            this.motivationToBuyAddButtonClick()
         } else { 
            this.deleteRandomMotivationToBuy(0)
            this.motivationToBuyAddButtonClick()
        }
    }
}
