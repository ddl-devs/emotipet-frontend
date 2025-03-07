describe("Edição do pet", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login e edição dos dados de um pet", () => {
    cy.get('input[name="username"]').type(Cypress.env("LOGIN_USERNAME"));
    cy.get('input[name="password"]').type(Cypress.env("LOGIN_PASSWORD"));

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/home");

    cy.contains("Bem-vindo à Página de Login").should("not.exist");

    cy.wait(3000);

    cy.contains("a", "Rex").click();

    cy.get("button").contains("Editar").click();

    cy.get('input[id="name"]').should("have.value", "Rex");
    cy.get('input[id="breed"]').should("have.value", "Pug");
    cy.get('input[id="weight"]').should("have.value", "50");
    cy.get('input[id="gender"]').should("have.value", "MALE");
    cy.get('input[id="height"]').should("have.value", "20");
    cy.get('input[id="birthdate"]').should("have.value", "2024-01-01");

    // alterando os dados
    cy.get('input[id="name"]').clear().type("Buddy");
    cy.get('input[id="breed"]').clear().type("Labrador");
    cy.get('input[id="weight"]').clear().type("60");
    cy.get('input[id="gender"]').clear().type("FEMALE");
    cy.get('input[id="height"]').clear().type("25");
    cy.get('input[id="birthdate"]').clear().type("2023-05-05");

    cy.get("button").contains("Salvar").click();

    cy.wait(3000);

    cy.get('input[id="name"]').should("have.value", "Buddy");
    cy.get('input[id="breed"]').should("have.value", "Labrador");
    cy.get('input[id="weight"]').should("have.value", "60");
    cy.get('input[id="gender"]').should("have.value", "FEMALE");
    cy.get('input[id="height"]').should("have.value", "25");
    cy.get('input[id="birthdate"]').should("have.value", "2023-05-05");

    // revertendo as alterações
    cy.get("button").contains("Editar").click();

    cy.get('input[id="name"]').clear().type("Rex");
    cy.get('input[id="breed"]').clear().type("Pug");
    cy.get('input[id="weight"]').clear().type("50");
    cy.get('input[id="gender"]').clear().type("MALE");
    cy.get('input[id="height"]').clear().type("20");
    cy.get('input[id="birthdate"]').clear().type("2024-01-01");

    cy.get("button").contains("Salvar").click();

    cy.wait(3000);

    cy.get('input[id="name"]').should("have.value", "Rex");
    cy.get('input[id="breed"]').should("have.value", "Pug");
    cy.get('input[id="weight"]').should("have.value", "50");
    cy.get('input[id="gender"]').should("have.value", "MALE");
    cy.get('input[id="height"]').should("have.value", "20");
    cy.get('input[id="birthdate"]').should("have.value", "2024-01-01");
  });
});
