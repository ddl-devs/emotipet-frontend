describe("Deletar pet", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.request("POST", "https://backend.damdevops.com.br/auth/login", {
      username: Cypress.env("LOGIN_USERNAME"),
      password: Cypress.env("LOGIN_PASSWORD"),
    }).then((response) => {
      console.log("/auth/login: ", response.body);

      const userAuthToken = response.body.access_token;

      const formData = new FormData();
      formData.append("name", "Rex");
      formData.append("breed", "Pug");
      formData.append("weight", "50");
      formData.append("birthdate", "2024-01-01");
      formData.append("height", "20");
      formData.append("gender", "MALE");
      formData.append("species", "DOG");

      cy.request({
        method: "POST",
        url: "https://backend.damdevops.com.br/pets/",
        headers: {
          Authorization: `Bearer ${userAuthToken}`,
        },
        body: formData,
        encoding: "binary",
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });

  it("login e excluir um pet", () => {
    cy.get('input[name="username"]').type(Cypress.env("LOGIN_USERNAME"));
    cy.get('input[name="password"]').type(Cypress.env("LOGIN_PASSWORD"));

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/home");

    cy.contains("Bem-vindo à Página de Login").should("not.exist");

    cy.wait(3000);

    cy.contains("a", "Rex").click();

    cy.wait(3000);

    cy.get("button").contains("Excluir").click();

    cy.wait(1000);

    cy.get("button.bg-red.rounded-full").click();

    cy.wait(1000);

    cy.url().should("include", "/home");

    cy.contains("Rex").should("not.exist");
  });
});
