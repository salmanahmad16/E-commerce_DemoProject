import { HomePage } from "../pages/home_page";
import { LoginPage } from "../pages/login_page";
import { SignUpPage } from "../pages/signUp_page";

const home = new HomePage()
const login = new LoginPage()
const signup = new SignUpPage()

describe("End to End Test - E commerce website", function(){

    beforeEach(()=>{
        signup.goToSignUpPage()     // Redirect to Login Page
        cy.title().should("eq", "Login - My Store") 
    })

    it("Should not create account - 2 Negative Tests", function(){

        signup.InValidcreateAccount("abc.com")        // Negative test - invalid email address test
        signup.invalidCreateAccountWithExistingEmail("salmanleokhan@gmail.com")  // Negative test- Exisiting email

    })

    it("Should not login - 2 Negative Tests ", function(){
        
        login.invalidLogin1("sultanahmadkhan@gmail.com", "88877733") // Correct Email Wrong Password
        login.invalidLogin2("sulman", "4324223")                    // Invalid Email address
    })

    it("Should create new account and fill the form - Positive Test", function(){
        signup.ValidcreateAccount("khansableo1@gmail.com")
        signup.fillRegistrationForm("khan","new khan", "123456","khan", "new khan","humari apni", "abc 12345", "abc12345 Raiwind road lahore", "Lahore","75000","Additoinal info is here","09004374433","090033344433","khan@gmail.com")
    })

    it("Should Login the account - Positive Test", function(){
        login.validLogin("khansableo1@gmail.com", "123456")     // Valid Email and password
    })

    it("Should interaction with Home and its products", function(){
        login.validLogin("khansableo1@gmail.com", "123456")     // Valid Email and password
        home.goToHomePage()                 // Refirect to home page
        cy.title().should("eq","My Store")      // Validate Title of home page
        home.searchProduct("dress")             // search product on site
        home.sortproducts()                     // sort to A to Z
        home.selectProduct("Blouse")            // Select Product
        cy.title().should("eq","Blouse - My Store")     // Validate Page Title
        home.validatePriceDescription()             // Validate price and description
        home.addToCart("5","3")                 // select quantity 5 and size 3 = Large
        home.validaddReview("First Title", "This is first review while testing")
    })



    
})
