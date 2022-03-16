# temp-cypress-har-generator-example
A sample repo to demonstrate that cy.request are not getting captured by cypress-har-generator

### Pre-requisites
1. [Cypress](https://www.cypress.io/)
2. Node.js
3. Chrome Browser

### Steps to get started

1. `cd` to this repo and type `npm i`
2. Start the server by `node index.js`. Change the port if not available (make sure to do changes in the spec as well)
3. Run the spec by `cypress run --spec "cypress/integration/1-getting-started/local.spec.js" --headed --browser "chrome"`
4. When the session is being executed, open the chrome dev tools and go to the Network tab and observe the requests being made.
5. Export the har file from the Network tab before the browser closes (Optional).
6. Then compare the har file generated by cypress-har-generator and the one we exported earlier (Optional).

Note: A har file exported from chrom browser and generated by cypress-har-generator are already available in the repo along with the video of the session.