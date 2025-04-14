/// <reference types="cypress" />

describe('Ingresar a Github', () => {

    const url = Cypress.env('url');
    const email = Cypress.env('email');
    const contraseña = Cypress.env('contraseña');
    const usuario_GitHub = Cypress.env('usuario_GitHub');

    let gitHubSelectors;

    before(() => {
        if (!url || !email || !contraseña || !usuario_GitHub) {
            throw new Error('Faltan variables de entorno necesarias para ejecutar el test.');
        }
    });

    beforeEach(() => {

        cy.fixture('gitHub').then(({ selectorEmail, selectorPassword, selectorBtn, avatar, usuarioTexto }) => {

            cy.login(
                url,
                selectorEmail,
                selectorPassword,
                selectorBtn,
                email,
                contraseña
            );

            gitHubSelectors = { avatar, usuarioTexto };
        });
    });

    it('verificar ingreso a Github y usuario', () => {

        cy.url().should('include', 'github.com'); 

        cy.get(gitHubSelectors.avatar).should('be.visible').click();

        cy.get(gitHubSelectors.usuarioTexto)
            .should('contain.text', usuario_GitHub)
            .then(() => {
                cy.log('Usuario verificado correctamente ✅');
            }); 
    })
})