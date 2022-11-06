/// <reference types="Cypress" />

describe("Test contact us form via webdriverUni",()=>{
    it("Should be able to submit a succesful submition via contact us form", ()=>{
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Bilbo")
        cy.get('[name="email"]').type("barbak@mail.com")
        cy.get('textarea.feedback-input').type("ASDASFASDGDAFGSAEF SDF DFA SDFAS")
        cy.get('[type="submit"]').click();
    })

    it("Should not be able to submit a succesful submition via contact us form as all field are required", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Tom");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
    })
})

