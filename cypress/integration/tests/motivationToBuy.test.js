import { MainPage } from "../../pages/main.page";
import { PersonaPage } from "../../pages/persona.page";

const mainPage = new MainPage()
const personaPage = new PersonaPage()

describe('motivation to buy modal', () => {
    beforeEach( () => {
        mainPage.open()
        mainPage.openPersonaPage()
    })
    it('should remove random Motivation to buy', () => {
        personaPage.countMotivationToBuy().then(numberOfMotivations => {
            const indexToRemove = Math.floor(Math.random() * (numberOfMotivations -1 - 0 + 1) + 0)
            personaPage.deleteRandomMotivationToBuy(indexToRemove)
            personaPage.motivationToBuyList().should('have.length', numberOfMotivations -1)
        })
    })
    it.only('should add random Motivation to buy', () => {
         personaPage.countMotivationToBuy().then(numberOfMotivations => {
            personaPage.addRandomMotivationYoBuy(numberOfMotivations)
            personaPage.countMotivationToBuy().then(numberOfMotivationElements => {
                expect([numberOfMotivations +1, 5]).to.include(numberOfMotivationElements)
            })
        })
    })
})