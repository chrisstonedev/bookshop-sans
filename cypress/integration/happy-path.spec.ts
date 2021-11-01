describe('Happy path tests', () => {
  it('Tests the full happy path of placing an order', () => {
    cy.visit('/');
    cy.get('nav > :nth-child(3) > a').should('have.text', 'Login');
    cy.get('nav > :nth-child(3) > a').click();
    cy.get('[type="text"]').type('new-user');
    cy.get('[type="password"]').type('Strong1234');
    cy.get('[type="submit"]').click();
    cy.get('nav > :nth-child(3) > a').should('have.text', 'Logout');
    cy.get('#grid-wrapper').children().should('have.length', 5);
    cy.get(':nth-child(2) > a > img').click();
    cy.get('[type="submit"]').click();
    cy.get('nav > :nth-child(1) > a').click();
    cy.get('#carts-wrapper > form > input').click();

    cy.get('[name="addr1"]').type('My Address 1');
    cy.get('[name="addr2"]').type('My Address 2');
    cy.get('[name="city"]').type('My City');
    cy.get('[name="state"]').type('XX');
    cy.get('[name="zip"]').type('00000');
    cy.get('[name="credit"]').type('0000000000000000');
    cy.get('[name="expire"]').type('0000');
    cy.get('[type="submit"]').click();

    cy.get('#confirm-wrapper > :nth-child(1)').should('have.text', 'Success!');
  });
})
