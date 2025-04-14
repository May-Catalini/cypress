// ***********************************************


Cypress.Commands.add('login', ( url, selectorEmail, selectorPassword,  selectorBtn, email, password) => {
    cy.visit(url);
    cy.get(selectorEmail)
        .should('be.visible')
        .clear()
        .type(email);

    cy.get(selectorPassword)
        .should('be.visible')
        .clear()
        .type(password);

    cy.get(selectorBtn)
        .should('be.visible')
        .click(); 
  });


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })