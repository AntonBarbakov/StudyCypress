import ContactUsPage_PO from '../../support/pageObjects/webdriver-uni/ContactUsPage_PO';
import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test Contact Us form via WebdriverUni", () => {

  const homepage_PO = new Homepage_PO();
  const contactUsPage_PO = new ContactUsPage_PO();

  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  it.skip("Test", () => {
    homepage_PO.visitHomePage();
    homepage_PO.ContactUsButton.Click();
    homepage_PO.LoginPortalButton.cy.should('be.true');
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    // homepage_PO.visitHomePage();
    // cy.pause();
    // homepage_PO.openContactUsPage();
    // cy.pause();
    // contactUsPage_PO.FirstNameInput.Type(data.first_name);
    // contactUsPage_PO.LastNameInput.Type(data.last_name);
    // contactUsPage_PO.EmailInput.Type(data.email);
    // contactUsPage_PO.FeedbackInput.Type("How can I learn Cypress?");
    // contactUsPage_PO.SubmitButton.Click();
    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    
    
    cy.visit('weber.dev.weberdigitalfactory.com');
  
    // cy.visit('http://www.webdriveruniversity.com/');
    // cy.visit('/')
    cy.get(".login-form__button").click();

    // cy.origin('https://weberslicer--uat.sandbox.my.site.com', () => {
    //   cy.get('#Login').should('be.visible')
    //   cy.get('input#username').should('be.visible')
    //   cy.get('input#username').type('anton.barbakov@codeit.pro');
    //   cy.get('input#password').should('be.visible')
    //   cy.get('input#password').type('Terminator2JD');
    //   cy.get("#Login").click();
    // })
    // cy.get('[data-test="user-menu-toggle"]').should('include.text','anton.barbakov@codeit.pro')
    
    // cy.get('[data-test="user-menu-toggle"]').click()
  });

});
