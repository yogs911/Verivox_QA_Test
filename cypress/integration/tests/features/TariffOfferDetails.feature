Feature: Tariff Offers Details

    Scenario Outline: Verify offer details for selected tariff

        Given that I can open www.verivox.de
        When I navigate to the DSL calculator page
        And I enter 030 for my area code
        And I select the 100 Mbps bandwidth option
        And I click the Jetzt vergleichen button
        When I click on any Zum Angebot button to select a '<tariff>' offer
        Then I should see the corresponding offer page for the selected tariff
        Examples:
            |tariff|
            |Magenta Zuhause L Young|
            |Red Internet & Phone 100 Cable Young|