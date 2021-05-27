/// <reference types="cypress" />

import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const DSL_CALC_LABEL = 'label[id="mps-label-1"] span[class="mps-label-text"]';
const PHONE_PREFIX_INPUT = 'input[name="phonePrefix"]'
const INTERNET_SPEED_OPTION = 'label[id*="dsl-option-3"]'
const COMPARE_TARIFF_BTN = '#mps-tab-box-1 > form > div.page-default-signup > button'

Given('that I can open www.verivox.de', () => {
    cy.visit('www.verivox.de');
    cy.wait(10000)

    cy.get('body').then((body) => {
        cy.log(Cypress.$('#uc-btn-accept-banner').is(":visible"))
        if (Cypress.$('#uc-btn-accept-banner').is(':visible')) {
            cy.get('#uc-btn-accept-banner').click();
        }
    })
});

When('I navigate to the DSL calculator page', () => {
    cy.get(DSL_CALC_LABEL).click({ force: true });
})

And('I enter 030 for my area code', () => {
    cy.get(PHONE_PREFIX_INPUT).type('030', { force: true });
})

And('I select the 100 Mbps bandwidth option', () => {
    cy.get(INTERNET_SPEED_OPTION).click({ force: true });
})

And('I click the Jetzt vergleichen button', () => {
    cy.get(COMPARE_TARIFF_BTN).click({ force: true });
    cy.title().should('eq', 'DSL-Preisvergleich aller DSL-Anbieter in Deutschland')
})