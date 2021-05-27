# Verivox_QA_Test

Test suite is developed using Cypress and Cucumber BDD

## Pre-requisite 

* Node.js 12 or 14 and above must be installed

# Installation
* Clone or fork this repository
* go to the root directory of the project
* run command *npm install* to install the dependencies

# Project Structure
* Feature files are present inside cypress/integration/tests/features
* Spec files are present under features inside corresponding folders
```
├───fixtures
├───integration
│   ├───common
│   └───tests
│       └───features
│           ├───MultipleTariffsResult
│           ├───TariffOfferDetails
│           └───VerifyDSLCalculator
├───plugins
├───reports
│   ├───mocha
│   └───mochareports
├───screenshots
└───support
```
# Run tests
* To run tests on chrome browser - *npm run test -- --browser=chrome*
* To run tests on firefox browser - *npm run test -- --browser=firefox*
* To run tests through Cypress UI : *npx cypress open* and click on each feature file to execute or run all features

# Reports
* Report will be generated under cypress/reports/mochareports
