import { LoginPage } from "../pages/login_page";
import { SignUpPage } from "../pages/signUp_page";

const login = new LoginPage()
const singup = new SignUpPage()


describe("Login Page Tests", function(){

    it("Should not login - Test 1", function(){

        singup.goToSignUpPage()     // Redirect to Login Page
        login.invalidLogin1("sultanahmadkhan@gmail.com", "88877733") // Correct Email Wrong Password
        login.invalidLogin2("sulman", "4324223")                    // Invalid Email address
        login.validLogin("sultanahmadkhan@gmail.com", "123456")     // Valid Email and password

    })








})