describe('Testing Hello World page', function() {
    it('Visiting page', function() {
      cy.visit('http://localhost:8000')
    })
    
    it('checking content', function() {
      cy.contains('Hello World')
    })
  })