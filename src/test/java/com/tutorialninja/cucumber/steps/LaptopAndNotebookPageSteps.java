package com.tutorialninja.cucumber.steps;


import com.tutorialninja.pages.HomePage;
import com.tutorialninja.pages.LaptopAndNotebookPage;
import com.tutorialninja.pages.ProductPage;
import com.tutorialninja.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class LaptopAndNotebookPageSteps {
    @And("^I click on show all laptop and notebook$")
    public void iClickOnShowAllLaptopAndNotebook() {
        new HomePage().clickOnShowAllLaptopAndNoteBook();
    }

    @Then("^I should see product arrange in price high to low order successfully$")
    public void iShouldSeeProductArrangeInPriceHighToLowOrderSuccessfully() {
        Assert.assertEquals("Product not sorted by price High to Low",new LaptopAndNotebookPage().priceHighToLow(), new LaptopAndNotebookPage().getPriceHighToLow());
    }

    @And("^I select product \"([^\"]*)\" from laptop and notebook page$")
    public void iSelectProductFromLaptopAndNotebookPage(String productName){
        new LaptopAndNotebookPage().clickOnProductMacBook(productName);
    }

    @Then("^I should navigate to \"([^\"]*)\" product$")
    public void iShouldNavigateToProduct(String productName){
        Assert.assertEquals("MacBook Product not display",productName, new ProductPage().getProductMacBookText());
    }

    @Then("^I should see product macbook added successfully message$")
    public void iShouldSeeProductMacbookAddedSuccessfullyMessage() throws InterruptedException{
        Thread.sleep(500);
        Assert.assertTrue("Product not added to cart", new ProductPage().getSuccessText().contains("Success: You have added MacBook to your shopping cart!"));
    }
    @And("^I should see \"([^\"]*)\" product$")
    public void iShouldSeeProduct(String productName){
        Assert.assertEquals("Product name not matched", "MacBook", new ShoppingCartPage().getProductText());
    }

    @And("^I change quantity \"([^\"]*)\" for product$")
    public void iChangeQuantityForProduct(String quantity){
        new ShoppingCartPage().changeQuantityForProduct(quantity);

    }

    @And("^I click on update quantity$")
    public void iClickOnUpdateQuantity() {
        new ShoppingCartPage().clickOnUpdateQuantity();
    }

    @Then("^I should see cart modified message$")
    public void iShouldSeeCartModifiedMessage() {
        Assert.assertTrue("Cart not modified",new ShoppingCartPage().getUpdateSuccessfullyText().contains("Success: You have modified your shopping cart!"));
    }
    @And("^I should see total price for macbook products$")
    public void iShouldSeeTotalPriceForMacbookProducts() {
        Assert.assertEquals("Total not matched", "£737.45", new ShoppingCartPage().getTotalPrice());
    }

    @And("^I click on checkout button$")
    public void iClickOnCheckoutButton() {
        new ShoppingCartPage().clickOnCheckoutButton();
    }

    @Then("^I should navigate to checkout page$")
    public void iShouldNavigateToRegisterPage() {
        Assert.assertEquals("Not Navigate to checkout page","Checkout", new com.tutorialninja.pages.RegisterPage().getCheckoutText());
    }

    @And("^I should see new customer text$")
    public void iShouldSeeNewCustomerText() throws InterruptedException{
        Thread.sleep(500);
        Assert.assertEquals("New Customer Text not found","New Customer", new com.tutorialninja.pages.RegisterPage().getNewCustomerText());
    }

    @And("^I click on guest checkout button$")
    public void iClickOnGuestCheckoutButton() throws InterruptedException{
        Thread.sleep(500);
        new com.tutorialninja.pages.RegisterPage().clickOnGuestCheckOutRadioButton();
    }

    @And("^I click on continue button of guest checkout page$")
    public void iClickOnContinueButtonOfGuestRegisterPage() {
        new com.tutorialninja.pages.RegisterPage().clickOnContinueButton1();
    }

    @And("^I filled all mandatory field of checkout page$")
    public void iFilledAllMandatoryFieldOfRegisterPage() {
        new com.tutorialninja.pages.RegisterPage().enterFirstName1("pradip");
        new com.tutorialninja.pages.RegisterPage().enterLastName1("kakadiya");
        new com.tutorialninja.pages.RegisterPage().enterEmailId("praidp123@gmail.com");
        new com.tutorialninja.pages.RegisterPage().enterTelephone1("07855265320");
        new com.tutorialninja.pages.RegisterPage().enterAddressLine1("54,puna road");
        new com.tutorialninja.pages.RegisterPage().enterCity("London");
        new com.tutorialninja.pages.RegisterPage().enterPostCode("HA8 5QL");
        new com.tutorialninja.pages.RegisterPage().selectCountry("India");
        new com.tutorialninja.pages.RegisterPage().selectRegion("Gujarat");

    }

    @And("^I click on continue after fill all detail on checkout page$")
    public void iClickOnContinueAfterFillAllDetailOnRegisterPage() {
        new com.tutorialninja.pages.RegisterPage().clickOnContinue5();
    }

    @And("^I add comments to text area about product order$")
    public void iAddCommentsToTextAreaAboutProductOrder() {
        new com.tutorialninja.pages.RegisterPage().addCommentsToTextArea("Happy Birthday");
    }

    @And("^I click checkbox of terms and condition$")
    public void iClickCheckboxOfTermsAndCondition() {
        new com.tutorialninja.pages.RegisterPage().checkTermsAndConditionCheckBox();
    }

    @And("^I click on continue of checkout$")
    public void iClickOnContinueOfCheckout() {
        new com.tutorialninja.pages.RegisterPage().clickContinue();
    }

    @Then("^I should see warning message regarding Payment method$")
    public void iShouldSeeWarningMessageRegardingPaymentMethod() {
        Assert.assertTrue("Warning message not displayed",new com.tutorialninja.pages.RegisterPage().getWarningMessage().contains("Warning: Payment method required!"));
    }


}
