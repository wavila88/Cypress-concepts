describe('div testing', () =>{
  it('visit page is rendering', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.div-color').should('be.visible');
  });

  it('mouse hover change color to blue', () =>{
    cy.get('[data-testid="div-color-change"]').trigger('mouseover');
    cy.get('.div-color-blue').should('be.visible'); 
  })

})