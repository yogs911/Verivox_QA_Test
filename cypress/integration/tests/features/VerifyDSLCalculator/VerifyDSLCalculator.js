/// <reference types="cypress" />

import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps';


Then('I should see a page that lists the available tariffs for my selection' , ()=>{

    cy.get('div.container>div').its('length').should('be.gte',5)
    cy.get('div.container>div div[class*="internet-speed-download"] div[class*="internet-speed-literal"] b')
    .each(item =>{
        cy.wrap(item).invoke('text').then(parseFloat).should('be.gte', 100);
    })
    
});