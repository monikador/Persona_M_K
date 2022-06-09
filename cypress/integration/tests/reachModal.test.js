import { MainPage } from "../../pages/main.page";
import { PersonaPage } from "../../pages/persona.page"

const mainPage = new MainPage()
const personaPage = new PersonaPage()

const randomReachValue = Math.floor(Math.random() * 124 + 1)
const mathOperator = Math.random() > 0.5 ? "plus" : "minus"

describe('reach modal', () => {
    beforeEach( () => {
        mainPage.open()
        mainPage.openPersonaPage()
    })
    it('should increase reach value to maximum possible value', () => {
        personaPage.increaseReachValue()
        personaPage.reachValueButton().should('have.value', 250)
    })
    it.only('should decrease reach value, to minimum possible value', () => {
        personaPage.decreaseReachValue()
        personaPage.reachValueButton().should('have.value', 1)
    })
    it('should change reach value', () => {
        personaPage.changeReachValue(randomReachValue, mathOperator)
        const correctValueOfChange = mathOperator === 'plus' ? 125 + randomReachValue : 125 - randomReachValue
        personaPage.reachValueButton().should('have.value', correctValueOfChange )
    });
});