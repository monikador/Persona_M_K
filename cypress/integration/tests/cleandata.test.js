import { PersonaPage } from "../../pages/persona.page";
import { MainPage } from "../../pages/main.page";


const mainPage = new MainPage()
const personaPage = new PersonaPage() 
const defaultNumberOfTrends = 1

describe('clean data', () => {
    it ('should clean data', () => {
        mainPage.open()
        mainPage.openPersonaPage()
        personaPage.fillTitledata()
        personaPage.fillTrendsData()
        personaPage.cleanData()
        personaPage.personaTitleInput().should('be.empty')
        personaPage.personaTitleInput().should('have.value',"")
        personaPage.negativeTrendsRemoveButton().should('have.length', defaultNumberOfTrends )


    })
    
});
