describe("Criação de recomendação de pet", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("login e criação de uma recomendação do pet", () => {
      // Login
      cy.get('input[name="username"]').type("teste2");
      cy.get('input[name="password"]').type("admin");
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should("include", "/home");
  
      cy.contains("Bem-vindo à Página de Login").should("not.exist");
  
      cy.wait(2000);
  
      // Acessar a aba de recomendações
      cy.contains("div#pets", "Buddy").click();
      cy.wait(2000);
  
      cy.get('div#recomendacoes').find('div').its('length').then((numDivs) => {
        // Preencher os campos do formulário
        cy.get('select#category-register').select("HEALTH");
        
        // Garantir que o botão está visível e disponível
        cy.get('button#criarReco').should('be.visible').click();
        
        cy.wait(2000);
  
        // Verificar se o número de recomendações aumentou
        cy.get('div#recomendacoes').find('div').its('length').should('eq', numDivs + 2);
      });
    });
  });