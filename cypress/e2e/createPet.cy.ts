describe("Criação de pet", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login e criação de um novo pet", () => {
    cy.get('input[name="username"]').type(Cypress.env("LOGIN_USERNAME"));
    cy.get('input[name="password"]').type(Cypress.env("LOGIN_PASSWORD"));
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/home");
    cy.contains("Bem-vindo à Página de Login").should("not.exist");

    cy.wait(2000);

    cy.contains("button", "Adicionar").click();
    cy.wait(3000);

    cy.get("input#name").type("Buddy");
    cy.wait(1000);

    cy.get("input#breed").type("Yorkshire");
    cy.wait(1000);

    cy.get("select#gender").select("MALE");
    cy.wait(1000);

    cy.get("input#birthdate").type("2023-05-05");
    cy.wait(1000);

    cy.get("select#species").select("DOG");
    cy.wait(1000);

    cy.get("input#weight").type("15");
    cy.wait(1000);

    cy.get("input#height").type("40");
    cy.wait(1000);

    cy.contains("button", "Salvar").click({ force: true });

    cy.wait(2000);

    cy.on("window:alert", (str) => {
      expect(str).to.include("Pet criado com sucesso");
    });

    cy.url().should("include", "/home");

    cy.contains("Buddy").should("exist");
  });
});
