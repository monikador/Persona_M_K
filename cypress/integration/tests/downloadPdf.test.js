import { PersonaPage } from "../../pages/persona.page"
import { MainPage } from "../../pages/main.page"
import { DownloadPdfPopUpPage } from "../../pages/downloadPdfPopUp.page"
import { role } from "../../testData/data.json"

const mainPage = new MainPage()
const personaPage = new PersonaPage() 
const downloadPdfPopUpPage = new DownloadPdfPopUpPage()

const selectedRole = role[Math.floor(Math.random()*role.length)]

describe('downloadPdf', () => {
    beforeEach( () => {
        mainPage.open()
        mainPage.openPersonaPage()
    })

    it('should not download pdf file', () => {
        personaPage.downloadPdf()
        personaPage.pdfValidationInfo().should('be.visible')
    })
    it('should have info about correct download', () => {
        personaPage.fillTitledata()
        personaPage.downloadPdf()
        downloadPdfPopUpPage.fillName()
        downloadPdfPopUpPage.fillEmail()
        downloadPdfPopUpPage.selectRole(selectedRole)
        downloadPdfPopUpPage.fillCompany()
        downloadPdfPopUpPage.selectAgreement()
        downloadPdfPopUpPage.clickSend()
        downloadPdfPopUpPage.correctDownloadText().should('have.text','Thank you for choosing Buyer Persona Creator')
    })
    it('should be info that field is required', () => {
        personaPage.fillTitledata()
        personaPage.downloadPdf()
        downloadPdfPopUpPage.fillName()
        downloadPdfPopUpPage.selectRole(selectedRole)
        downloadPdfPopUpPage.fillCompany()
        downloadPdfPopUpPage.selectAgreement()
        downloadPdfPopUpPage.clickSend()
        downloadPdfPopUpPage.emailValidationInfo().should('be.visible')
    })
});


