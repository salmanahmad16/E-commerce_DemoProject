import { SignUpPage } from "../pages/signUp_page";

const signup = new SignUpPage()

describe("Registration Page", function(){
    it("Should Go to the Login Page",function(){
        signup.goToSignUpPage()
        cy.title().should("eq", "Login - My Store")                 // validate Login title

    })
    it("Should Not Login - Invalid Email Test", function(){
        signup.InValidcreateAccount("abc.com")             // Negative test - invalid email address test
    })

    it("Shoul Not Login - While using Existing Email address", function(){
        signup.invalidCreateAccountWithExistingEmail("salmanleokhan@gmail.com")  // Negative test- Exisiting email
    })

    it("Should create new account and fill the form", function(){
        signup.ValidcreateAccount("sultanahmadkhan@gmail.com")
        signup.fillRegistrationForm("khan","new khan", "123456","khan", "new khan","humari apni", "abc 12345", "abc12345 Raiwind road lahore", "Lahore","75000","Additoinal info is here","09004374433","090033344433","khan@gmail.com")
    })
})