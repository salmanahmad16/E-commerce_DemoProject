/// <reference types ="cypress" />

export class SignUpPage{

    goToSignUpPage(){
        cy.visit("http://automationpractice.com/index.php?").then(function(){
            cy.contains('Sign in').click()      // click on signin btn
        })
        
    }
    // Positive Test - With New Email Address
    ValidcreateAccount(email){
        cy.wait(2000)
        cy.title().should("eq", "Login - My Store")
        const email_text = cy.get('#email_create').should("be.visible")
        email_text.clear()
        email_text.type(email)
        cy.get('#SubmitCreate').should("be.visible").click()
        cy.wait(6000)

    }
    // Negative test - With Existing Email Account
    invalidCreateAccountWithExistingEmail(email){
        const error_return_message = "An account using this email address has already been registered. Please enter a valid password or request a new one. "
        cy.wait(2000)
        cy.title().should("eq", "Login - My Store")
        const email_text = cy.get('#email_create').should("be.visible")
        email_text.clear()
        email_text.type(email)
        cy.get('#SubmitCreate').should("be.visible").click()
        cy.wait(4000)
        cy.get('#create_account_error>ol>li').contains(error_return_message)

    }

    // Negative Test - With Invalid Email Address
    InValidcreateAccount(email){
        const email_text = cy.get('#email_create').should("be.visible")
        email_text.clear()
        email_text.type(email)
        cy.get('#SubmitCreate').should("be.visible").click()
        cy.get('#create_account_error').contains("Invalid email address.").should("be.visible")
    }

    // Positive Test - Fill Complete Form
    fillRegistrationForm(fname,lname, pass, fname2,lname2, comp, add1, add2, city, zip, addi, hphone, mphone, emailAlaias){

        // personal information section
        const genderTitle_checkbox = cy.get('#uniform-id_gender1')
        genderTitle_checkbox.should("be.visible").and("not.be.checked")
        genderTitle_checkbox.click()

        const firstName_text = cy.get('#customer_firstname')
        firstName_text.should("be.visible")
        firstName_text.type(fname)

        const lastName_text = cy.get('#customer_lastname')
        lastName_text.should("be.visible")
        lastName_text.type(lname)

        const email_text = cy.get('#email')
        email_text.should("be.visible")

        const password_text = cy.get('#passwd')
        password_text.should("be.visible")
        password_text.type(pass)

        const span_text = cy.get('.form_info')
        span_text.contains("(Five characters minimum)")

        const days_dob = cy.get('#days')
        days_dob.select('16')

        const month_dob = cy.get('#months')
        month_dob.select('8')

        const year_dob = cy.get('#years')
        year_dob.select('1994')


        // validate newletter and special offer text
        const newlettertext = cy.get('.account_creation>div:nth-child(8)>label')
        newlettertext.contains('Sign up for our newsletter!')

        const specialOffer = cy.get('.account_creation>div:nth-child(9)>label')
        specialOffer.contains('Receive special offers from our partners!')

        // Your Addres Section
        const firstname2 = cy.get('.account_creation>p>input[id="firstname"]')
        firstname2.should("be.visible")
        firstname2.type(fname2)

        const lastname2 = cy.get('.account_creation>p>input[id="lastname"]')
        lastname2.should("be.visible")
        lastname2.type(lname2)

        const company_text = cy.get('.account_creation>p>input[id="company"]')
        company_text.should("be.visible")
        company_text.type(comp)

        const address_text = cy.get('.account_creation>p>input[id="address1"]')
        address_text.should("be.visible")
        address_text.type(add1)

        // validate street address text
        cy.get('.account_creation>p:nth-child(5)>span').contains('Street address, P.O. Box, Company name, etc.')


        const address2_text = cy.get('.account_creation>p>input[id="address2"]')
        address2_text.should("be.visible")
        address2_text.type(add2)

        // validate apartment, build text
        cy.get('.account_creation>p:nth-child(6)>span').contains("Apartment, suite, unit, building, floor, etc...")


        const city_text = cy.get('#city')
        city_text.should("be.visible")
        city_text.type(city)

        const state_dropbox = cy.get('#id_state')
        state_dropbox.select('14')

        const zipcode_text = cy.get('#postcode')
        zipcode_text.should("be.visible")
        zipcode_text.type(zip)

        const country_dropbox = cy.get('#id_country')
        country_dropbox.select('21')

        const additionalInfo_text = cy.get('#other')
        additionalInfo_text.should("be.visible")
        additionalInfo_text.type(addi)

        // validate additional information text
        cy.get('.account_creation>p:nth-child(12)').contains('You must register at least one phone number.')

        const homePhone_text = cy.get('#phone')
        homePhone_text.should("be.visible")
        homePhone_text.type(hphone)
 
        const mobilePhone_text = cy.get('#phone_mobile')
        mobilePhone_text.should("be.visible")
        mobilePhone_text.type(mphone)

        const emailAddressAlias = cy.get('#alias')
        emailAddressAlias.should("be.visible")
        emailAddressAlias.clear()
        emailAddressAlias.type(emailAlaias)
        cy.wait(2000)

        // click on register account button
        cy.get('#submitAccount').should("be.visible").click()
        cy.wait(2000)
        cy.get('.page-heading').contains("My Account")

    }


}