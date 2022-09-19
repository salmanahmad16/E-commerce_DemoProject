/// <reference types = "cypress" />

import { HomePage } from "../pages/home_page";
import { LoginPage } from "../pages/login_page";
import { SignUpPage } from "../pages/signUp_page";

const home = new HomePage()
const login = new LoginPage()
const signup = new SignUpPage()


describe("Home Page Functions", function(){

    it("Should Redirect to the home page", function(){

        signup.goToSignUpPage()     // Redirect to Login Page
        login.validLogin("sultanahmadkhan@gmail.com", "123456")     // Valid Email and password
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