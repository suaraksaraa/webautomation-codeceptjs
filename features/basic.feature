Feature: Business rules
  As a User
  I want to be able to access the website demo.automationtesting.in

  Scenario: Verify for the register feature
    Given I have access the website demo.automationtesting
    When I click skip sign in
    Then I will be navigate to Register page
    When I fill all the fields
    And click submit button 
    Then I will be navigate to webtable page
  Scenario: Verify for delete the data
    Given I have access the webtable page
    When I delete a record from webtable
    Then I successfully deleted
  Scenario: Verify for click the alert button
    Given I have access the SwitchTo page
    When I click alert box button 
    Then I will see the alert box on the screen 
  Scenario: Verify for Interaction 
    Given I have access the Interaction page
    When Drag & drop the selenium logo 
    Then I will see selenium logo on the another screen 
