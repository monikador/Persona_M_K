import { PersonaPage } from "../../pages/persona.page"
import { MainPage } from "../../pages/main.page"
import { DownloadPdfPopUpPage } from "../../pages/downloadPdfPopUp.page"
import { role } from "../../testData/data.json"

const mainPage = new MainPage()
const personaPage = new PersonaPage() 
const downloadPdfPopUpPage = new DownloadPdfPopUpPage()

const selectedRole = role[Math.floor(Math.random()*role.length)]

describe('downloadPDF', () => {
    beforeEach( () => {
        mainPage.open()
        mainPage.openPersonaPage()
    })

    it('should not download pdf file - without tittle of persona', () => {
        personaPage.openDownloadPDFModal()
        personaPage.pdfValidationInfo().should('be.visible')
    })
    it('should have info about correct download', () => {
        personaPage.fillTitledata()
        personaPage.openDownloadPDFModal()
        downloadPdfPopUpPage.fillName()
        downloadPdfPopUpPage.fillEmail()
        downloadPdfPopUpPage.selectRole(selectedRole)
        downloadPdfPopUpPage.fillCompany()
        downloadPdfPopUpPage.selectAgreement()
        downloadPdfPopUpPage.downloadPDFConfirm() //jak zaczekać na wykonanie asercji bo czasami modal ładuje się za długo
        downloadPdfPopUpPage.correctDownloadText().should('have.text','Thank you for choosing Buyer Persona Creator')
    })
    it('should be info that e-mail field is required', () => {
        personaPage.fillTitledata()
        personaPage.openDownloadPDFModal()
        downloadPdfPopUpPage.fillName()
        downloadPdfPopUpPage.selectRole(selectedRole)
        downloadPdfPopUpPage.fillCompany()
        downloadPdfPopUpPage.selectAgreement()
        downloadPdfPopUpPage.downloadPDFConfirm()
        downloadPdfPopUpPage.emailValidationInfo().should('be.visible')
    })
    it('should have info - terms are not accepted', () => {
        personaPage.fillTitledata()
        personaPage.openDownloadPDFModal()
        downloadPdfPopUpPage.fillName()
        downloadPdfPopUpPage.fillEmail()
        downloadPdfPopUpPage.selectRole(selectedRole)
        downloadPdfPopUpPage.fillCompany()
        downloadPdfPopUpPage.downloadPDFConfirm()
        downloadPdfPopUpPage.agreementValidationInfo().should('be.visible')
    })
})


