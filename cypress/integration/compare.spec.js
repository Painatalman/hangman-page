describe('Device views', () => {
  it('works', () => {
    cy.visit('localhost:3000');

    cy.eyesOpen({
      appName: 'Main page game',
      testName: 'Default',
    });
    cy.eyesCheckWindow('Main Page');
    cy.get('button').contains('Reset').click();
    cy.eyesCheckWindow('Click!');
    cy.eyesClose();
  });
});
