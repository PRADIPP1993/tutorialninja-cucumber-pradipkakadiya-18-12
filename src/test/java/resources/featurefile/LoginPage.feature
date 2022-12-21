@regression
Feature: Login Test

  As a user i want to check login/logout functionality of tutorial ninja website

  Background: I am on homepage of tutorial ninja website
    Given I am on homepage

  @sanity
  Scenario: User should navigate to login page successfully
    When I click on my account link
    And I select "Login" option from my account options
    Then I should navigate to login page successfully

  @smoke
  Scenario: User should login and logout successfully
    When I click on my account link
    And I select "Login" option from my account options
    And I enter email "pradip123@gmail.com"
    And I enter password "pradip123"
    And I click on login button
    And I should login successfully
    And I click on my account link
    And I select "Logout" option from my account options
    And I should logout successfully
    Then I click on continue button



