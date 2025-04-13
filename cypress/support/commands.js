// ***********************************************


Cypress.Commands.add('login', ( url, selectorEmail, selectorPassword,  selectorBtn, email, password) => {
    cy.visit(url);
    cy.get(selectorEmail).type(email);
    cy.get(selectorPassword).type(password);
    cy.get(selectorBtn).click(); 
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