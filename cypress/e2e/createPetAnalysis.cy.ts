describe("Criação de análise de pet", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("login e criação de uma análise do pet", () => {
      cy.get('input[name="username"]').type(Cypress.env("LOGIN_USERNAME"));
      cy.get('input[name="password"]').type(Cypress.env("LOGIN_PASSWORD"));

        cy.get('button[type="submit"]').click();

        cy.url().should("include", "/home");

        cy.contains("Bem-vindo à Página de Login").should("not.exist");

        cy.wait(2000);

        cy.contains("div#pets", "Buddy").click();
        cy.wait(2000);

        cy.get('div#analises').find('div').its('length').then((numDivs) => {
            cy.contains("button", "Criar").click();
            cy.wait(2000);
        
            cy.get('select#tipoAnalise').select("EMOTIONAL");
            cy.get('input#profileImage').selectFile("cypress/fixtures/bolota.png", { force: true });
            
            cy.contains("button", "Criar Análise").click();
            
            cy.wait(3000);
            
            //verificar de numero de divs aumentou
            cy.get('div#analises').find('div').its('length').should('eq', numDivs + 1);
        });
    });
  });