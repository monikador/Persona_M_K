import { MainPage } from "../../pages/main.page";
import { PersonaPage } from "../../pages/persona.page";

const mainPage = new MainPage()
const personaPage = new PersonaPage()

describe('description cards', () => {
    before(() => {
        mainPage.open()
        mainPage.openPersonaPage()
    })
    it('should delete random description car', () => {
        personaPage.countDescriptionCards().then(numberOfDescriptions => {
            const indexToRemove = Math.floor(Math.random() * (numberOfDescriptions -1 - 0 + 1) + 0)
        personaPage.deleteDescriptionCard(indexToRemove)
            personaPage.countDescriptionCards().should('eq', numberOfDescriptions - 1)
        })
    })
})
