const validarUser = {
  login: 'admin',
password:'admin', 
}



describe('empty spec', () => {
  it('passes', () => {
    
    cy.visit('https://localhost:44320/')
    cy.get(':nth-child(1) > .thumb-wrapper > .thumb-content > .btn').click();
    cy.get('form > :nth-child(1)').type(validarUser.login);
    cy.get('form > :nth-child(2)').type(validarUser.password);
    cy.get('.btn').click();
    cy.get(':nth-child(5) > :nth-child(4) > a').click();
  })
})