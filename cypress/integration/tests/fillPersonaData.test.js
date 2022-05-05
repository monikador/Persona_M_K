import { MainPage } from "../../pages/main.page"
import { PersonaPage } from "../../pages/persona.page"
import { companySize, education, familyStatus } from "../../testData/data.json"
//import * as testData from "..."
//testData.companySize

const mainPage = new MainPage()
const personaPage = new PersonaPage() 

const selectedCompanySize = companySize[Math.floor(Math.random()*companySize.length)]
const selectedEducation = education[Math.floor(Math.random()*education.length)]
const selectedFamilyStatus = familyStatus[Math.floor(Math.random()*familyStatus.length)]

describe("fill in data suite", () => {
    it("should fill persona data", () => {
        mainPage.open()
        mainPage.openPersonaPage()
        personaPage.createNewButton().should('be.visible')
        personaPage.addFile()
        personaPage.fillPersonaData('Male', selectedCompanySize, selectedEducation, selectedFamilyStatus) // tutaj jeśli nie podam selectCompanySize to będzie wprowadzone '<50' - stosujemy gdy np chcemy zawsze sprawdzić tą samą wartość.
        personaPage.industryInput().should('be.visible')
    })
})