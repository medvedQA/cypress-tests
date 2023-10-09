export class NavBar{

    navBar_cypress = '.navbar-brand'
    navBar_commands = '.dropdown-toggle'
    navBar_utilities = '#navbar > :nth-child(1) > :nth-child(2) > a'
    navBar_api = '#navbar > :nth-child(1) > :nth-child(3) > a'
    navBar_github = '.pull-right > li > a'

    navigate(url){
        cy.visit(url)
    }

    checkCypress(){
        cy.get(this.navBar_cypress).should('contain.text', 'cypress.io')
    }

    checkCommands(){
        cy.get(this.navBar_commands).should('contain.text', 'Commands')
    }

    checkUtilities(){
        cy.get(this.navBar_utilities).should('contain.text', 'Utilities')
    }

    checkApi(){
        cy.get(this.navBar_api).should('contain.text', 'Cypress API')
    }

    checkGithub(){
        cy.get(this.navBar_github).should('contain.text', 'GitHub')
    }

}