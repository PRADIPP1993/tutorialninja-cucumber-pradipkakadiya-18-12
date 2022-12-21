package com.tutorialninja.pages;

import com.tutorialninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register Account')]")
    WebElement registerText;
    @CacheLookup
    @FindBy(id = "input-firstname")
    WebElement firstNameField;
    @CacheLookup
    @FindBy(id = "input-lastname")
    WebElement lastNameField;
    @CacheLookup
    @FindBy(id = "input-email")
    WebElement emailField;
    @CacheLookup
    @FindBy(id = "input-telephone")
    WebElement telephoneField;
    @CacheLookup
    @FindBy(id = "input-password")
    WebElement passwordField;
    @CacheLookup
    @FindBy(id = "input-confirm")
    WebElement confirmPasswordField;
    @CacheLookup
    @FindBy(xpath = "//fieldset[3]//input")
    List<WebElement> subscribeButton;
    @CacheLookup
    @FindBy(xpath = "//input[@name='agree']")
    WebElement privacyPolicyCheckBox;
    @CacheLookup
    @FindBy(xpath = "//input[@type='submit']")
    WebElement continueButton;
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Your Account Has Been Created!']")
    WebElement accountCreatedMessage;
    @CacheLookup
    @FindBy(xpath = "//a[text()='Continue']")
    WebElement continueButton1;

    @CacheLookup
    @FindBy(xpath = "//div[@id='content']/h1")
    WebElement checkOutText;
    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'New Customer')]")
    WebElement newCustomerText;
    @CacheLookup
    @FindBy(xpath = "//input[@value='guest']")
    WebElement guestCheckOut;
    @CacheLookup
    @FindBy(xpath = "//input[@id='button-account']")
    WebElement continueButton8;
    @CacheLookup
    @FindBy(id = "input-payment-firstname")
    WebElement firstName;
    @CacheLookup
    @FindBy(id = "input-payment-lastname")
    WebElement lastName;
    @CacheLookup
    @FindBy(id = "input-payment-email")
    WebElement emailField2;
    @CacheLookup
    @FindBy(id = "input-payment-telephone")
    WebElement telephone;
    @CacheLookup
    @FindBy(id = "input-payment-address-1")
    WebElement address;
    @CacheLookup
    @FindBy(id = "input-payment-city")
    WebElement city;
    @CacheLookup
    @FindBy(id = "input-payment-postcode")
    WebElement postcode;
    @CacheLookup
    @FindBy(id = "input-payment-country")
    WebElement country;
    @CacheLookup
    @FindBy(id = "input-payment-zone")
    WebElement region;
    @CacheLookup
    @FindBy(id = "button-guest")
    WebElement continueButton5;
    @CacheLookup
    @FindBy(xpath = "//textarea[@name='comment']")
    WebElement textArea;
    @CacheLookup
    @FindBy(xpath = "//input[@type='checkbox']")
    WebElement termsCondition;
    @CacheLookup
    @FindBy(xpath = "//input[@id='button-payment-method']")
    WebElement continueButton2;
    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger alert-dismissible']")
    WebElement warningMessage;


    public String getRegisterText() {
        log.info("Verify the text “Register Account”. " + registerText.toString());
        return getTextFromElement(registerText);
    }


    public void enterFirstName(String firstName) {
        sendTextToElement(firstNameField, firstName);
        log.info("Enter Firstname" + firstName + "to Firstname field " + firstNameField.toString());
    }


    public void enterLastName(String lastName) {
        sendTextToElement(lastNameField, lastName);
        log.info("Enter Lastname" + lastName + "to Lastname field " + lastNameField.toString());
    }

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
        log.info("Enter email" + email + "to email field " + emailField.toString());
    }


    public void enterTelephone(String telephone) {
        sendTextToElement(telephoneField, telephone);
        log.info("Enter Telephone" + telephone + "to Telephone field " + telephoneField.toString());
    }

    //3.7 Enter Password
    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter Password " + password + "to Password field " + passwordField.toString());
    }

    //3.8 Enter ConfirmPassword
    public void enterConfirmPassword(String confirmPassword) {
        sendTextToElement(confirmPasswordField, confirmPassword);
        log.info("Enter ConfirmPassword" + confirmPassword + "to ConfirmPassword field " + confirmPasswordField.toString());
    }

    //3.9 Select Subscribe Yes radio button
    public void clickOnSubscribeRadioButton(String text) {

        List<WebElement> radioButtons = subscribeButton;
        for (WebElement e : radioButtons) {
            if (e.getText().equals(text)) {
                e.click();
                break;
            }
        }
        log.info("Select Subscribe" + text + "radio button " + subscribeButton.toString());
    }


    public void clickOnPrivacyPolicyCheckBox() {
        clickOnElement(privacyPolicyCheckBox);
        log.info("Click on Privacy Policy check box " + privacyPolicyCheckBox.toString());
    }

    public void clickOnContinueButton() {
        clickOnElement(continueButton);
        log.info("Clicking on Continue Button " + continueButton.toString());
    }

    public String getAccountCreatedMessage() {
        log.info("Verify the message “Your Account Has Been Created!”" + accountCreatedMessage.toString());
        return getTextFromElement(accountCreatedMessage);
    }

    public void clickOnContinue() {
        clickOnElement(continueButton1);
        log.info("Clicking on Continue Button " + continueButton1.toString());

    }


    //2.16 Verify the text “Checkout”
    public String getCheckoutText() {
        log.info("Verify the text “Checkout” " + checkOutText.toString());
        return getTextFromElement(checkOutText);
    }

    //2.17 Verify the Text “New Customer”
    public String getNewCustomerText() {
        log.info("Verify the Text “New Customer” " + newCustomerText.toString());
        return getTextFromElement(newCustomerText);
    }

    //2.18 Click on “Guest Checkout” radio button
    public void clickOnGuestCheckOutRadioButton() {
        clickOnElement(guestCheckOut);
        log.info("Click on “Guest Checkout” radio button " + guestCheckOut.toString());
    }

    //2.19 Click on “Continue” tab
    public void clickOnContinueButton1() {
        clickOnElement(continueButton8);
        log.info("Click on “Continue” tab " + continueButton8.toString());
    }

    //Enter firstname
    public void enterFirstName1(String name) {
        sendTextToElement(firstName, name);
        log.info("Enter firstname" + name + "to firstname field " + firstName.toString());
    }

    //Enter lastname
    public void enterLastName1(String name) {
        sendTextToElement(lastName, name);
        log.info("Enter lastname" + name + "to lastname field " + lastName.toString());
    }

    //Enter email
    public void enterEmailId(String email) {
        sendTextToElement(emailField2, email + getRandomString(3) + "@gmail.com");
        log.info("Enter email" + email + "to email field " + emailField2.toString());
    }

    //Enter phoneNumber
    public void enterTelephone1(String phoneNumber) {
        sendTextToElement(telephone, phoneNumber);
        log.info("Enter phoneNumber" + phoneNumber + "to phoneNumber field " + telephone.toString());
    }

    //Enter address Line 1
    public void enterAddressLine1(String addressLine) {
        sendTextToElement(address, addressLine);
        log.info("Enter address Line 1" + addressLine + "to address field " + address.toString());
    }

    //Enter city
    public void enterCity(String cityName) {
        sendTextToElement(city, cityName);
        log.info("Enter city" + cityName + "to city field " + city.toString());
    }

    //Enter postcode
    public void enterPostCode(String postCode) {
        sendTextToElement(postcode, postCode);
        log.info("Enter postcode" + postCode + "to postcode field " + postcode.toString());
    }

    //Select country
    public void selectCountry(String countryName) {
        selectByVisibleTextFromDropDown(country, countryName);
        log.info("Select country" + countryName + "to country field " + country.toString());

    }

    //Select state
    public void selectRegion(String regionName) {
        selectByVisibleTextFromDropDown(region, regionName);
        log.info("Select state" + regionName + "to statel field " + region.toString());
    }

    public void clickOnContinue5() {
        clickOnElement(continueButton5);
        log.info(" Click on continue button " + continueButton5.toString());
    }

    public void addCommentsToTextArea(String text) {
        sendTextToElement(textArea, text);
        log.info("Enter comments " + text + "in to text area " + textArea.toString());
    }

    public void checkTermsAndConditionCheckBox() {
        clickOnElement(termsCondition);
        log.info(" Check the Terms & Conditions check box " + termsCondition.toString());
    }

    public void clickContinue() {
        clickOnElement(continueButton2);
        log.info("Click on “Continue” button " + continueButton2.toString());
    }

    public String getWarningMessage() {
        log.info("Verify the message “Warning: Payment method required!” " + warningMessage.toString());
        return getTextFromElement(warningMessage);
    }
}
