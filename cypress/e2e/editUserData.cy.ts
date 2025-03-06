describe("Edição do usuário spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login e edição de dados do usuário", () => {
    cy.get('input[name="username"]').type(Cypress.env("LOGIN_USERNAME"));
    cy.get('input[name="password"]').type(Cypress.env("LOGIN_PASSWORD"));

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/home");

    cy.contains("Bem-vindo à Página de Login").should("not.exist");

    cy.get('img[alt="botão com imagem da cara de um cachorro"]').trigger(
      "mouseover"
    );

    cy.get(".style-module__fIASuq__headerButtonContent").should("be.visible");

    cy.get(".style-module__fIASuq__headerButtonContent a")
      .contains("Perfil")
      .click();

    cy.url().should("include", "/user/");

    cy.get("button").contains("Editar").click();

    cy.get('input[id="firstName"]').should("have.value", "Cypress");
    cy.get('input[id="lastName"]').should("have.value", "Test");
    cy.get('input[id="email"]').should("have.value", "cypress@email.com");
    cy.get('input[id="dateOfBirth"]').should("have.value", "1990-03-06");

    cy.get('input[id="firstName"]').clear().type("Test");
    cy.get('input[id="lastName"]').clear().type("Cypress");
    cy.get('input[id="email"]').clear().type("cypress-test@example.com");
    cy.get('input[id="dateOfBirth"]').clear().type("1995-05-05");

    cy.get("button").contains("Salvar").click();

    cy.wait(1000);

    cy.url().should("include", "/user/");

    cy.get('input[id="firstName"]').should("have.value", "Test");
    cy.get('input[id="lastName"]').should("have.value", "Cypress");
    cy.get('input[id="email"]').should(
      "have.value",
      "cypress-test@example.com"
    );
    cy.get('input[id="dateOfBirth"]').should("have.value", "1995-05-05");

    cy.get("button").contains("Editar").click();

    cy.get('input[id="firstName"]').clear().type("Cypress");
    cy.get('input[id="lastName"]').clear().type("Test");
    cy.get('input[id="email"]').clear().type("cypress@email.com");
    cy.get('input[id="dateOfBirth"]').clear().type("1990-03-06");

    cy.get("button").contains("Salvar").click();

    cy.wait(1000);

    cy.get('input[id="firstName"]').should("have.value", "Cypress");
    cy.get('input[id="lastName"]').should("have.value", "Test");
    cy.get('input[id="email"]').should("have.value", "cypress@email.com");
    cy.get('input[id="dateOfBirth"]').should("have.value", "1990-03-06");
  });
});
