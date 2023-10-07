export class LoginPage{

    loginPage_username = '#username'
    loginPage_password = '#password'
    loginPage_loginButton = '#loginbtn'
    loginPage_buttonLogin = 'Увійти'

    navigate(url){
        cy.visit(url)
    }

    buttonLogin(){
        cy.contains(this.loginPage_buttonLogin).click()
    }

    enterUsername(username){
        cy.get(this.loginPage_username).type(username)
    }

    enterPassword(password){
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}