import { MainPage } from "../../pages/main.page";
import { PersonaPage } from "../../pages/persona.page";
import { minSliderValue, maxSliderValue, midSliderValue, belowMidSliderValue } from "../../testData/data.json"

const mainPage = new MainPage()
const personaPage = new PersonaPage()

const randomReachValue = Math.floor(Math.random() * belowMidSliderValue + 1)
const mathOperator = Math.random() > 0.5 ? "plus" : "minus"

describe('reach modal', () => {
    beforeEach( () => {
        mainPage.open()
        mainPage.openPersonaPage()
    })
    it('should increase reach value to maximum possible value', () => {
        personaPage.increaseReachValue()
        personaPage.reachValueButton().should('have.value', maxSliderValue)
    })
    it('should decrease reach value, to minimum possible value', () => {
        personaPage.decreaseReachValue()
        personaPage.reachValueButton().should('have.value', minSliderValue)
    })
    it('should change reach value', () => {
        personaPage.changeReachValue(randomReachValue, mathOperator)
        const correctValueOfChange = mathOperator === 'plus' ? midSliderValue + randomReachValue : midSliderValue - randomReachValue
        personaPage.reachValueButton().should('have.value', correctValueOfChange )
    })
})