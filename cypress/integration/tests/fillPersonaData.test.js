import { MainPage } from "../../pages/main.page";
import { PersonaPage } from "../../pages/persona.page";
import { companySize } from "../../testData/data.json";

const mainPage = new MainPage()
const personaPage = new PersonaPage() 

const selectedCompanySize = companySize[Math.floor(Math.random()*companySize.length)]

describe("fill in data suite", () => {
    it("should fill persona data", () => {
        mainPage.open()
        mainPage.openPersonaPage()
        personaPage.createNewButton().should('be.visible')
        personaPage.addFile()
        personaPage.fillPersonaData('Male', selectedCompanySize) // tutaj jeśli nie podam selectCompanySize to będzie wprowadzone '<50' - stosujemy gdy np chcemy zawsze sprawdzić tą samą wartość.
        personaPage.industryInput().should('be.visible')
        //personaPage.fillIndustryData()
    
    })
})