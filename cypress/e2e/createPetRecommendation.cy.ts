describe("Criação de recomendação de pet", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deve fazer login e criar uma recomendação de saúde para o pet", () => {
    cy.get('input[name="username"]').type(Cypress.env("LOGIN_USERNAME"));
    cy.get('input[name="password"]').type(Cypress.env("LOGIN_PASSWORD"));
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/home");
    cy.contains("Bem-vindo à Página de Login").should("not.exist");

    cy.contains("div#pets", "Buddy").click();

    cy.get("select#category-register").select("HEALTH");
    cy.get("button#criarReco").should("be.visible").click();

    // verificar se a recomendação foi criada com a data atual
    const hoje = new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    cy.get("div#recomendacoes").contains(`Saúde - ${hoje}`).should("exist");
  });
});
