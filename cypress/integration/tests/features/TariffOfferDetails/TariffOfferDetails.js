/// <reference types="cypress" />

import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

var tariff_name;
const AVAILABILITY_CHECK_BTN1 = 'a[data-description="firstAvailabilityCheckButton"]'
const AVAILABILITY_CHECK_BTN2 = 'a[data-description="secondAvailabilityCheckButton"]'
const PRICE_LABEL = 'div[class="summary-tariff-content flex"] div[class="centered-content effective-price-wrapper"]'
const TARIFFNAME_TXT = 'h3[class="group-header"]'
const HARDWARE_CHKBOX = 'div.option-description.hardware-tab>div'
const TARIFFKOSTEN_LABEL = 'tbody tr th:nth-child(1)'
const COST_CATEGORY = 'tr.cost-category'
const AVG_PRICE_TXT = 'tr[class="average-price"]'

When('I click on any Zum Angebot button to select a {string} offer', (tariff) => {
    cy.get('div.container>div', { timeout: 8000 }).contains(tariff)
        .parentsUntil('.container').contains('a', 'Zum Angebot').click({force:true})
      tariff_name = tariff;
})

Then('I should see the corresponding offer page for the selected tariff', () => {
    cy.title().should('eq', 'Verivox – Vergleichen. Wechseln. Sparen!')
    cy.get(AVAILABILITY_CHECK_BTN1, { timeout: 5000 }).should('exist')
    cy.get(AVAILABILITY_CHECK_BTN2).should('exist')
    cy.get(PRICE_LABEL).should('exist')
    cy.get(TARIFFNAME_TXT).should('contain.text', tariff_name)
    cy.get(HARDWARE_CHKBOX).should('exist')
    cy.get(TARIFFKOSTEN_LABEL).should('contain.text', 'Tarifkosten')
    cy.get(COST_CATEGORY).contains('Hardware').should('exist')
    cy.get(COST_CATEGORY).contains('Vorteile').should('exist')
    cy.get(AVG_PRICE_TXT).should('exist')
})
