import { MainPage } from "../../pages/main.page";
import { PersonaPage } from "../../pages/persona.page"

const mainPage = new MainPage()
const personaPage = new PersonaPage()
const dafoultNumberOfSkills = 3  //jak pobrać obecną ilość?


describe('skill modal', () => {
    beforeEach( () => {
        mainPage.open()
        mainPage.openPersonaPage()
    })

    it("should add new skill", () => {
        personaPage.addSkill()
        personaPage.skillsList().should('have.length', (dafoultNumberOfSkills + 1))
    })
    it("should increase skill value", () => {
        personaPage.changeSkillValue()
        personaPage.skillsValuelButton().should('have.value', 30)
    })
    it("should change skill name", () => {
        personaPage.changeSkillName()
        personaPage.skillNameInput().should('have.value', 'New name')
    })
    it("should delete new skill", () => {
        personaPage.deleteSkill()
        personaPage.skillsList().should('have.length', (dafoultNumberOfSkills - 1))
    })
    it('should delete random skill', () => {
        personaPage.countSkills().then(numberOfSkills => {
            const indexToRemove = Math.floor(Math.random() * (numberOfSkills -1 - 0 + 1) + 0)
            personaPage.deleteRandomSkill(indexToRemove)
            personaPage.removeSkillButton().should('have.length', 2)
        })
    })
});