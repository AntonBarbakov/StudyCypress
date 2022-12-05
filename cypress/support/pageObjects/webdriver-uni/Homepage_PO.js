import Button from "./Elements/Button";

class HomePage_PO {
    visitHomePage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));
    }

    openContactUsPage() {
        this.ContactUsButton.cy.invoke('removeAttr', 'target').click({ force: true })
    }

    openLoginPortalPage() {
        this.LoginPortalButton.cy.invoke('removeAttr', 'target').click({ force: true })
    }

    get ContactUsButton () { return new Button("#contact-us")}
    get LoginPortalButton () { return new Button('#login-portal')}
}
export default HomePage_PO;