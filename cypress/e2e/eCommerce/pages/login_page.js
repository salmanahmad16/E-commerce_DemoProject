export class LoginPage{

    // Correct email address with incorrect password
    invalidLogin1(email,pass){
        const emailText = cy.get('#email')
        emailText.should("be.visible")
        emailText.clear()
        emailText.type(email)

        const passwrodText = cy.get('#passwd')
        passwrodText.should("be.visible")
        passwrodText.clear()
        passwrodText.type(pass)

        cy.get('#SubmitLogin').should("be.visible").click()
        cy.wait(4000)
        cy.get('.alert-danger>ol>li').then(err=>{
            expect(err.text()).to.eq("Authentication failed.")
        })


}

    // Invalid email address with incorrect/Correct password
    invalidLogin2(email,pass){
        const emailText = cy.get('#email')
        emailText.should("be.visible")
        emailText.clear()
        emailText.type(email)

        const passwrodText = cy.get('#passwd')
        passwrodText.should("be.visible")
        passwrodText.clear()
        passwrodText.type(pass)

        cy.get('#SubmitLogin').should("be.visible").click()
        cy.wait(4000)
        cy.get('.alert-danger>ol>li').then(err=>{
            expect(err.text()).to.eq("Invalid email address.")
        })




}

     // Valid Login Test  - Correct Email and password
     validLogin(email,pass){
        const emailText = cy.get('#email')
        emailText.should("be.visible")
        emailText.clear()
        emailText.type(email)

        const passwrodText = cy.get('#passwd')
        passwrodText.should("be.visible")
        passwrodText.clear()
        passwrodText.type(pass)

        cy.get('#SubmitLogin').should("be.visible").click()
        cy.wait(4000)
        cy.title().should("eq","My account - My Store")

}



}