describe('Testing userForm component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.server();
    cy.route('POST', '**/usuarios', 'fixture:added_user.json')
  
    
  })
  it('render form and show button to show form', () =>{
    cy.addPerson('Emily','Avila','emy@gmail.com', 31125564);
  });

});