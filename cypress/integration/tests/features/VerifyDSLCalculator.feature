Feature: DSL Calculator


    Scenario: Verify the DSL calculator

        Given that I can open www.verivox.de
        When I navigate to the DSL calculator page
        And I enter 030 for my area code
        And I select the 100 Mbps bandwidth option
        And I click the Jetzt vergleichen button
        Then I should see a page that lists the available tariffs for my selection
        