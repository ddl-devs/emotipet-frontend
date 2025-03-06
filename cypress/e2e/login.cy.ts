describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("login successfully", () => {
    cy.get('input[name="username"]').type(Cypress.env("LOGIN_USERNAME"));
    cy.get('input[name="password"]').type(Cypress.env("LOGIN_PASSWORD"));

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/home");

    cy.contains("Bem-vindo à Página de Login").should("not.exist");
  });

  it("login fail", () => {
    cy.get('input[name="username"]').type(Cypress.env("LOGIN_USERNAME"));
    cy.get('input[name="password"]').type(Cypress.env("LOGIN_PASSWORD_FAIL"));

    cy.get('button[type="submit"]').click();

    cy.contains("Dados não encontrados no Keycloak - 401 UNAUTHORIZED").should(
      "be.visible"
    );
  });
});
