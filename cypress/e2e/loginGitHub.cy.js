/// <reference types="cypress" />

describe('Ingresar a Github', () => {

    const url = Cypress.env('url');
    const email = Cypress.env('email');
    const contraseña = Cypress.env('contraseña');
    const usuario_GitHub = Cypress.env('usuario_GitHub');

    let gitHub;

    beforeEach(() => {

        cy.fixture('gitHub').then((data) => {
            gitHub = data;

            cy.login(
                url,
                gitHub.selectorEmail,
                gitHub.selectorPassword,
                gitHub.selectorBtn,
                email,
                contraseña
            );
        });
    });

    it('verificar ingreso a Github y usuario', () => {

        cy.url().should('include', 'github.com'); 

        cy.get(gitHub.avatar).should('be.visible').click();

        cy.get(gitHub.usuarioTexto)
            .should('contain.text', usuario_GitHub)
            .then(() => {
                cy.log('Usuario verificado correctamente ✅');
                return;
            }); 
    })
})