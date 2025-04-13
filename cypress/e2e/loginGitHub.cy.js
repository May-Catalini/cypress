/// <reference types="cypress" />

describe('Ingresar a Github', () => {

    const selectorEmail = '#login_field';
    const selectorPassword = '#password';
    const selectorBtn = '.position-relative > .btn'; 
    
    const url = Cypress.env('url');
    const email = Cypress.env('email');
    const contraseña = Cypress.env('contraseña');
    const usuario_GitHub = Cypress.env('usuario_GitHub');


    beforeEach(() => {
        cy.login(url, selectorEmail, selectorPassword, selectorBtn, email, contraseña); 
    });

    it('verificar ingreso a Github y usuario', () => {

        cy.url().should('include', 'github.com'); 

        cy.get('.Button-label > .avatar').should('be.visible').click();

        cy.get('.text-bold > .Truncate__StyledTruncate-sc-23o1d2-0')
            .should('contain.text', usuario_GitHub)
            .then(() => {
                cy.log('Usuario verificado correctamente ✅');
                return;
            }); 
    })
})