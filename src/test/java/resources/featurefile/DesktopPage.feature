@regression
Feature: Desktop page test
  As a user i want to check desktop page and add product into cart

  Background: I am on homepage of tutorial ninja website
    Given I am on homepage

  @sanity
  Scenario: User should arrange product in alphabetical order successfully
    When I mouse hover and click on desktop tab
    And I click on show all desktops
    And I click on sort by position
    And I select product sort by "Name (Z - A)"
    Then I should see product arrange in alphabetical order successfully

  @smoke
  Scenario: User should add product to shopping cart successfully
    When I mouse hover and click on desktop tab
    And I click on show all desktops
    And I select currency "£ Pound Sterling"
    And I select product sort by "Name (A - Z)"
    And I select product "HP LP3065"
    And I should navigate to "HP LP3065" product page
    And I select date "2022","November","30"
    And I add quantity "1" for product
    And I click on add to cart button
    And I should see product added successfully message
    And I click on shopping cart button
    And I should see shopping cart text
    And I should see "HP LP3065" product name
    And I should see "2022-11-30" delivery date
    And I should see "Product 21" model name
    Then I should see total price


