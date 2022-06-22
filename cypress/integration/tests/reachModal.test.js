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
    it('should delete random reach', () => {
        personaPage.countReach().then(numberOfSkills => {
            const indexToRemove = Math.floor(Math.random() * (numberOfSkills -1 - 0 + 1) + 0)
            personaPage.deleteRandomReach(indexToRemove)
            personaPage.reachList().should('have.length', numberOfSkills -1)
        })
    })
    it('should add reach if reach list is shorter than 6', () => {
        let reach = false
        personaPage.countReach().then(numberOfReach => {
            personaPage.addRandomReach(numberOfReach)
            personaPage.countReach().then(numberOfReachElements => {
                if(numberOfReachElements === (numberOfReach +1) || numberOfReachElements === 6)
                reach = true
                    expect(reach).to.be.true
                // mogę to zrobić równie tak jak w motivation of buy czyli uyć expect([numberOfReach +1, 6]).to.include(numberOfReachElements)
            })
        })
    })  
})