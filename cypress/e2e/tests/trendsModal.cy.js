import { MainPage } from "../../pages/main.page";
import { PersonaPage } from "../../pages/persona.page";

const mainPage = new MainPage()
const personaPage = new PersonaPage()

describe('negative, positive trends', () => {
    before(() => {
        mainPage.open()
        mainPage.openPersonaPage()
    })
    it('should add negative trend', () => {
        personaPage.countNegativeTrends().then(numberOfTrends => {
            personaPage.fillNegativeTrendsData()
            personaPage.negativeTrendsRemoveButton().should('have.length', numberOfTrends + 1)
        })
    })
    it('should delete negative trend', () => {
        personaPage.countNegativeTrends().then(numberOfTrends => {
            const indexToRemove = Math.floor(Math.random() * (numberOfTrends -1 - 0 + 1) - 0)
            personaPage.deleteNegativeTrend(indexToRemove)
            personaPage.negativeTrendsRemoveButton().should('have.length', numberOfTrends -1)
        })
    })
    it('should add and delete trend', () => {
        personaPage.countPositiveTrends().then(numberOfTrends => {
            personaPage.fillPositiveTrendsData()
            personaPage.positiveTrendsRemoveButton().should('have.length', numberOfTrends + 1)
        })
    })
    it('should add and delete positive trend', () => {
        personaPage.countPositiveTrends().then(numberOfTrends2 => {
            const indexToRemove2 = Math.floor(Math.random() * (numberOfTrends2 - 1 - 0 + 1) - 0)
            personaPage.deletePositiveTrend(indexToRemove2)
            personaPage.countPositiveTrends().should('eq', numberOfTrends2 - 1)
        })
    })
})