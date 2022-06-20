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
        personaPage.changeReachValue(1253, mathOperator)
        personaPage.reachValueButton().should('have.value', maxSliderValue)
    })
    it('should decrease reach value, to minimum possible value', () => {
        personaPage.changeReachValue(129, "minus") //nie muszę tutaj uzywać randomReachValue, wazne zeby podać poprawną ilość parametrów. W przykładzie podaję liczbę, następnie jako mathOperator wstawiam cokolwiek co nie spełnia kryteriów.
        personaPage.reachValueButton().should('have.value', minSliderValue)
    })
    it('should change reach value - increase or decrease', () => {
        personaPage.changeReachValue(randomReachValue, mathOperator)
        const correctValueOfChange = mathOperator === 'plus' ? midSliderValue + randomReachValue : midSliderValue - randomReachValue
        personaPage.reachValueButton().should('have.value', correctValueOfChange )
    })
})