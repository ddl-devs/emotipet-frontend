describe("Criação de pet", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("login e criação de um novo pet", () => {
        // Login
        cy.get('input[name="username"]').type("teste2");
        cy.get('input[name="password"]').type("admin");
        cy.get('button[type="submit"]').click();
        
        cy.url().should("include", "/home");
        cy.contains("Bem-vindo à Página de Login").should("not.exist");
        
        cy.wait(2000);
        
        // Acessar modal de criação de pet
        cy.contains("button", "Adicionar").click();
        cy.wait(2000);
        
        // Preencher o formulário de criação de pet
        cy.get('input#name').type("Buddy");
        cy.get('select#gender').select("FEMALE");
        cy.get('input#birthdate').type("2023-05-05");
        cy.get('select#species').select("DOG");

        // Submeter o formulário
        cy.contains("button", "Salvar").click({force: true});
        
        cy.wait(2000);

        // Verificar se o alerta foi acionado
        cy.on("window:alert", (str) => {
            expect(str).to.include("Pet criado com sucesso");
        });
    });
});