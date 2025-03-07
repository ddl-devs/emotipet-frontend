describe("Criação de análise de pet", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("login e criação de uma análise do pet", () => {
      // Login
        cy.get('input[name="username"]').type("teste2");
        cy.get('input[name="password"]').type("admin");

        cy.get('button[type="submit"]').click();

        cy.url().should("include", "/home");

        cy.contains("Bem-vindo à Página de Login").should("not.exist");

        cy.wait(2000);

        // Acessar a aba de análises
        cy.contains("div#pets", "Buddy").click();
        cy.wait(2000);

        cy.get('div#analises').find('div').its('length').then((numDivs) => {
            // Abrir modal de criação de análise
            cy.contains("button", "Criar").click();
            cy.wait(2000);
        
            // Preencher os campos do formulário
            cy.get('select#tipoAnalise').select("EMOTIONAL");
            // Adicionar uma foto
            cy.get('input#profileImage').selectFile("cypress/fixtures/bolota.png", { force: true });
            
            // Submeter o formulário
            cy.contains("button", "Criar Análise").click();
            
            cy.wait(3000);
            
            //verificar de numero de divs aumentou
            cy.get('div#analises').find('div').its('length').should('eq', numDivs + 1);
        });
    });
  });