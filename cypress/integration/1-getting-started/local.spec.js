describe('local example', () => {
  beforeEach(() => {
    cy.recordHar();
    cy.visit('http://localhost:8090/')
  })

  afterEach(() => {
    cy.saveHar({ outDir: `./hars1` });
  })

  it('should make a timeout API call', () => {
    cy.request('/getTimeOut')
    cy.get('h1').contains('This is hosted on my local machine!')
    cy.screenshot('custom-filename-1')
  })

  it('should make a valid POST API call', () => {
    cy.request('POST', '/getValidPostResponse', {name:'Test Post Body'})
    cy.get('h1').contains('This is hosted on my local machine!')
    cy.screenshot('custom-filename-1')
  })

  it('should make a valid API call', () => {
    cy.request('/getValidResponse')
    cy.get('h1').contains('This is hosted on my local machine!')
    cy.screenshot('custom-filename-1')
  })

  it('should make a timeout API call', () => {
    cy.request('/getTimeOut')
    cy.get('h1').contains('This is hosted on my local machine!')
    cy.screenshot('custom-filename-1')
  })

  it('should make a valid API call', () => {
    cy.request('/getValidResponse')
    cy.get('h1').contains('This is hosted on my local machine!')
    cy.screenshot('custom-filename-1')
  })

  it('should contain the heading', () => {
    cy.get('h1').contains('This is hosted on my local machine!')
    cy.screenshot('custom-filename')
  })

  it('should contain the heading', () => {
    cy.get('h2').contains('This is a h2 tag')
    cy.screenshot('custom-filename-2')
  })
 
  it('should contain the heading', () => {
    cy.visit('http://localhost:8090/index2')
    cy.request('/getValidResponse')
    cy.get('h2').contains('This is a h2 tag')
    cy.screenshot('custom-filename-2')
  })

  it('should make a timeout API call', () => {
    cy.request('/getTimeOut')
    cy.get('h1').contains('This is hosted on my local machine!')
    cy.screenshot('custom-filename-1')
  })
})
