/// <reference types="cypress" />

import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

var totalNumberOfTariffs;

const TOTAL_TARIFF_TEXT = 'h2[class="summary-tariff"]';
const TARIFF_SEARCH_LIST = 'div.container>div';
const LOAD_TARIFF_BTN = 'button[class="btn btn-primary text-uppercase ng-star-inserted"]';

Then('I should see the total number of available tariffs listed in the Ermittelte Tarife section', () => {
    cy.get(TOTAL_TARIFF_TEXT).then(($total_tariffs) => {
        totalNumberOfTariffs = parseInt($total_tariffs.text());
        expect($total_tariffs, "Total available tariffs displayed successfully").to.be.visible;
    });

});

When('I scroll to the end of the Result List page', () => {
    cy.scrollTo('bottom');
});

Then('I should see only the first 20 tariffs displayed', () => {
    cy.get(TARIFF_SEARCH_LIST).its('length').should('eq', 20).log("First 20 tariffs displayed successfully");
})

When('I click on the button labeled 20 weitere Tarife laden', () => {
    cy.get(LOAD_TARIFF_BTN).as('loadbtn').click({force:true});
})

Then('I should see the next 20 tariffs displayed', () => {
    cy.wait(10000);
    cy.get(TARIFF_SEARCH_LIST).its('length').should('eql', 40).log("Next 20 tariffs displayed successfully");
})

And('I can continue to load any additional tariffs until all tariffs have been displayed', () => {

    clickLoadBtnUntilAllTariffsLoaded();
    cy.get(LOAD_TARIFF_BTN).should('not.exist').log("Load tariff button not displayed");
    cy.get(TARIFF_SEARCH_LIST).its('length').should('eq', totalNumberOfTariffs).log("Total number of tariffs match");

})

function clickLoadBtnUntilAllTariffsLoaded() {
    cy.get('body').then($body => {
        cy.scrollTo('bottom');
        cy.wait(5000);
        if (Cypress.$(LOAD_TARIFF_BTN).length) {
            cy.scrollTo('bottom');
            verifyRemainingTariffs();
            cy.get(LOAD_TARIFF_BTN).click({force:true});
            cy.wait(5000)

            clickLoadBtnUntilAllTariffsLoaded();
        }
    })
}

function verifyRemainingTariffs() {
    cy.get(LOAD_TARIFF_BTN).then(($btn) => {

        var actualRemainingTariff = parseInt($btn.text());

        if (actualRemainingTariff < 20) {
            cy.get(TARIFF_SEARCH_LIST).its('length').then((size) => {
                expect(actualRemainingTariff).to.eq((totalNumberOfTariffs - size), "Remaining tariffs displayed succesfully")
            })

        }
    })
}