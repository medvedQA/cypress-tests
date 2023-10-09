import { NavBar } from "../pages/navbar";

const navBar = new NavBar();

it("contain the text in navbar", () => {
  navBar.navigate('https://example.cypress.io/');
  navBar.checkCypress();
  navBar.checkCommands();
  navBar.checkUtilities();
  navBar.checkApi();
  navBar.checkGithub();
});
