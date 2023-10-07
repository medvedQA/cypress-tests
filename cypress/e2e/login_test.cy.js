import { LoginPage } from "../pages/login_page";

const loginPage = new LoginPage();

it("login the site", function () {
  loginPage.navigate("https://dn.dut.edu.ua/");
  loginPage.buttonLogin();
  loginPage.enterUsername("login");
  loginPage.enterPassword("password");
  loginPage.clickLogin();
  cy.url().should('eq', 'https://dn.dut.edu.ua/my/')
});
