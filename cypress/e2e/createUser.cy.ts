describe("Criando usuário spec", () => {
  let adminAuthToken: string;

  before(() => {
    cy.request("POST", "https://backend.damdevops.com.br/auth/login", {
      username: Cypress.env("LOGIN_ADMIN_USERNAME"),
      password: Cypress.env("LOGIN_ADMIN_PASSWORD"),
    }).then((response) => {
      adminAuthToken = response.body.access_token;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("criação de usuário com sucesso", () => {
    cy.contains("Não tem uma conta? Registre-se").click();

    cy.wait(3000);

    cy.get('input[id="username"]').clear().type(Cypress.env("CREATE_USERNAME"));
    cy.get('input[id="firstName"]').clear().type("CreateTest");
    cy.get('input[id="lastName"]').clear().type("Cypress");

    cy.get('input[id="email"]').clear().type("create_test_cypress@email.com");
    cy.get('input[id="dateOfBirth"]').type("2000-12-14");
    cy.get('input[id="password"]').clear().type(Cypress.env("CREATE_PASSWORD"));

    cy.contains("Cadastrar").click();

    cy.wait(1000);

    cy.url().should("eq", "http://localhost:3000/");

    cy.get('input[name="username"]').type(Cypress.env("CREATE_USERNAME"));
    cy.get('input[name="password"]').type(Cypress.env("CREATE_PASSWORD"));

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "http://localhost:3000/home");

    cy.contains("Bem-vindo à Página de Login").should("not.exist");

    // apagando o usuário
    // faz login
    cy.request("POST", "https://backend.damdevops.com.br/auth/login", {
      username: Cypress.env("CREATE_USERNAME"),
      password: Cypress.env("CREATE_PASSWORD"),
    }).then((response) => {
      console.log("/auth/login: ", response.body);

      const userAuthToken = response.body.access_token;

      // pega o id
      cy.request({
        method: "GET",
        url: "https://backend.damdevops.com.br/users/me",
        headers: {
          Authorization: `Bearer ${userAuthToken}`,
        },
      }).then((response) => {
        console.log("users/me: ", response.body);
        const userId = response.body.id;

        // deleta o usuário
        cy.request({
          method: "DELETE",
          url: `https://backend.damdevops.com.br/users/${userId}`,
          headers: {
            Authorization: `Bearer ${adminAuthToken}`,
          },
        }).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(204);
        });
      });
    });
  });
});
