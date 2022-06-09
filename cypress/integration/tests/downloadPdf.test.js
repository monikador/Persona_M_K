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

    it('should not download pdf file - without tittle of persona', () => {
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
    it('should be info that e-mail field is required', () => {
        personaPage.fillTitledata()
        personaPage.downloadPdf()
        downloadPdfPopUpPage.fillName()
        downloadPdfPopUpPage.selectRole(selectedRole)
        downloadPdfPopUpPage.fillCompany()
        downloadPdfPopUpPage.selectAgreement()
        downloadPdfPopUpPage.clickSend()
        downloadPdfPopUpPage.emailValidationInfo().should('be.visible')
    })
    it.only('should have info - terms are not accepted', () => {
        personaPage.fillTitledata()
        personaPage.downloadPdf()
        downloadPdfPopUpPage.fillName()
        downloadPdfPopUpPage.fillEmail()
        downloadPdfPopUpPage.selectRole(selectedRole)
        downloadPdfPopUpPage.fillCompany()
        downloadPdfPopUpPage.clickSend()
        downloadPdfPopUpPage.agreementValidationInfo().should('be.visible')
    })
});


