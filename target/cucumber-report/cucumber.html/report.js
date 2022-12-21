$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DesktopPage.feature");
formatter.feature({
  "line": 2,
  "name": "Desktop page test",
  "description": "As a user i want to check desktop page and add product into cart",
  "id": "desktop-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6528300800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 223046700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should arrange product in alphabetical order successfully",
  "description": "",
  "id": "desktop-page-test;user-should-arrange-product-in-alphabetical-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select product sort by \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see product arrange in alphabetical order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 294609600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 950195400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 113279100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 895366100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductArrangeInAlphabeticalOrderSuccessfully()"
});
formatter.result({
  "duration": 490202400,
  "status": "passed"
});
formatter.after({
  "duration": 866930600,
  "status": "passed"
});
formatter.before({
  "duration": 3443392900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "desktop-page-test;user-should-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select currency \"£ Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product sort by \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should navigate to \"HP LP3065\" product page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I select date \"2022\",\"November\",\"30\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I add quantity \"1\" for product",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see product added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see shopping cart text",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see \"HP LP3065\" product name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see \"2022-11-30\" delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see \"Product 21\" model name",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see total price",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 320225200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 975050800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£ Pound Sterling",
      "offset": 19
    }
  ],
  "location": "DesktopPageSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 977568200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 711955100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 18
    }
  ],
  "location": "DesktopPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1759390000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 22
    }
  ],
  "location": "DesktopPageSteps.iShouldNavigateToProductPage(String)"
});
formatter.result({
  "duration": 39634100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 15
    },
    {
      "val": "November",
      "offset": 22
    },
    {
      "val": "30",
      "offset": 33
    }
  ],
  "location": "DesktopPageSteps.iSelectDate(String,String,String)"
});
formatter.result({
  "duration": 8261685000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "DesktopPageSteps.iAddQuantityForProduct(String)"
});
formatter.result({
  "duration": 159120700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 711930200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 555592600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 1236378800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeShoppingCartText()"
});
formatter.result({
  "duration": 91138100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeProductName(String)"
});
formatter.result({
  "duration": 32838200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeDeliveryDate(String)"
});
formatter.result({
  "duration": 31876200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeModelName(String)"
});
formatter.result({
  "duration": 29697400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeTotalPrice()"
});
formatter.result({
  "duration": 32544900,
  "status": "passed"
});
formatter.after({
  "duration": 858113000,
  "status": "passed"
});
formatter.uri("LaptopAndNotebookPage.feature");
formatter.feature({
  "line": 2,
  "name": "LaptopAndNotebook product Test",
  "description": "\nAs a user i want to check functionality of laptop and notebook page of tutorial ninja website",
  "id": "laptopandnotebook-product-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3579629700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should arrange product in price high to low order successfully",
  "description": "",
  "id": "laptopandnotebook-product-test;user-should-arrange-product-in-price-high-to-low-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see product arrange in price high to low order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 371178600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 780690300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 98380400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 746905500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProductArrangeInPriceHighToLowOrderSuccessfully()"
});
formatter.result({
  "duration": 292336000,
  "status": "passed"
});
formatter.after({
  "duration": 840805600,
  "status": "passed"
});
formatter.before({
  "duration": 3426864900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should place order successfully",
  "description": "",
  "id": "laptopandnotebook-product-test;user-should-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select currency \"£ Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Macbook\" from laptop and notebook page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should navigate to \"MacBook\" product",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see product macbook added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see shopping cart text",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should see \"MacBook\" product",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I change quantity \"2\" for product",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on update quantity",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see cart modified message",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I should see total price for macbook products",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should navigate to checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I should see new customer text",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on guest checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on continue button of guest checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I filled all mandatory field of checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on continue after fill all detail on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I add comments to text area about product order",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click checkbox of terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on continue of checkout",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should see warning message regarding Payment method",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 313624900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 783779900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£ Pound Sterling",
      "offset": 19
    }
  ],
  "location": "DesktopPageSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 956982800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 592696400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook",
      "offset": 18
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iSelectProductFromLaptopAndNotebookPage(String)"
});
formatter.result({
  "duration": 1597837000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 22
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iShouldNavigateToProduct(String)"
});
formatter.result({
  "duration": 37658200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 671154800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProductMacbookAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 563940900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 1138397800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeShoppingCartText()"
});
formatter.result({
  "duration": 47465700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 14
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProduct(String)"
});
formatter.result({
  "duration": 32781500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iChangeQuantityForProduct(String)"
});
formatter.result({
  "duration": 119824700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnUpdateQuantity()"
});
formatter.result({
  "duration": 790838700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeCartModifiedMessage()"
});
formatter.result({
  "duration": 51709300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeTotalPriceForMacbookProducts()"
});
formatter.result({
  "duration": 39268600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 550109300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldNavigateToRegisterPage()"
});
formatter.result({
  "duration": 57831900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeNewCustomerText()"
});
formatter.result({
  "duration": 581933000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnGuestCheckoutButton()"
});
formatter.result({
  "duration": 581073600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueButtonOfGuestRegisterPage()"
});
formatter.result({
  "duration": 111218300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iFilledAllMandatoryFieldOfRegisterPage()"
});
formatter.result({
  "duration": 2465190000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueAfterFillAllDetailOnRegisterPage()"
});
formatter.result({
  "duration": 121611600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iAddCommentsToTextAreaAboutProductOrder()"
});
formatter.result({
  "duration": 20051163400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//textarea[@name\u003d\u0027comment\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [94afd17e464728ec26da5d019396c567, findElement {using\u003dxpath, value\u003d//textarea[@name\u003d\u0027comment\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\44744\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55808}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55808/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 94afd17e464728ec26da5d019396c567\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.clear(Unknown Source)\r\n\tat com.tutorialninja.utility.Utility.sendTextToElement(Utility.java:76)\r\n\tat com.tutorialninja.pages.RegisterPage.addCommentsToTextArea(RegisterPage.java:274)\r\n\tat com.tutorialninja.cucumber.steps.LaptopAndNotebookPageSteps.iAddCommentsToTextAreaAboutProductOrder(LaptopAndNotebookPageSteps.java:111)\r\n\tat ✽.And I add comments to text area about product order(LaptopAndNotebookPage.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickCheckboxOfTermsAndCondition()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueOfCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeWarningMessageRegardingPaymentMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1224548800,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "\nAs a user i want to check login/logout functionality of tutorial ninja website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3780715800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 153015400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 574517800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 106471200,
  "status": "passed"
});
formatter.after({
  "duration": 854796700,
  "status": "passed"
});
formatter.before({
  "duration": 3407891200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should login and logout successfully",
  "description": "",
  "id": "login-test;user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter email \"pradip123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"pradip123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"Logout\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 97812300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 675095100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pradip123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 291467900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pradip123",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 172319100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 566116800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 40125791200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[text()\u003d\u0027My Account\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ac2de5c027c118002a62e59982c22e6e, findElement {using\u003dxpath, value\u003d//h2[text()\u003d\u0027My Account\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\44744\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55870}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55870/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ac2de5c027c118002a62e59982c22e6e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat com.tutorialninja.utility.Utility.getTextFromElement(Utility.java:65)\r\n\tat com.tutorialninja.pages.LoginPage.getMyAccountText(LoginPage.java:68)\r\n\tat com.tutorialninja.cucumber.steps.LoginPageSteps.iShouldLoginSuccessfully(LoginPageSteps.java:45)\r\n\tat ✽.Then I should login successfully(LoginPage.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1230765000,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 2,
  "name": "Registration Test",
  "description": "As a user i want to do registration into tutorial ninja website",
  "id": "registration-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3597225500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "registration-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 165809000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 1143874500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 52737700,
  "status": "passed"
});
formatter.after({
  "duration": 820661500,
  "status": "passed"
});
formatter.before({
  "duration": 3501460500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should register account successfully",
  "description": "",
  "id": "registration-test;user-should-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I filled all mandatory field of registration",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on continue button of registration page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see account successfully created message",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"Logout\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 95375400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 1128422200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iFilledAllMandatoryFieldOfRegistration()"
});
formatter.result({
  "duration": 1251058200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnContinueButtonOfRegistrationPage()"
});
formatter.result({
  "duration": 1330403500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldSeeAccountSuccessfullyCreatedMessage()"
});
formatter.result({
  "duration": 71594500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 443088400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 123748400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 732122300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 77051700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 576235200,
  "status": "passed"
});
formatter.after({
  "duration": 836835000,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 2,
  "name": "Top menu test",
  "description": "As a user i want to check top menu tabs on tutorial ninja websites homepage",
  "id": "top-menu-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3302557400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should navigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 323251100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 1057711500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 44419300,
  "status": "passed"
});
formatter.after({
  "duration": 845806600,
  "status": "passed"
});
formatter.before({
  "duration": 3352677100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should navigate to laptop and notebook page successfully",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-laptop-and-notebook-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should navigate to laptop and notebook page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 295991700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 811699400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToLaptopAndNotebookPageSuccessfully()"
});
formatter.result({
  "duration": 84875900,
  "status": "passed"
});
formatter.after({
  "duration": 1237865500,
  "status": "passed"
});
formatter.before({
  "duration": 3425815800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage of tutorial ninja website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should navigate to component page successfully",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-component-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I mouse hover and click on component tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select menu \"Show All Components\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should navigate to component page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnComponentTab()"
});
formatter.result({
  "duration": 342386700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Components",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 718022300,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToComponentPageSuccessfully()"
});
formatter.result({
  "duration": 41981500,
  "status": "passed"
});
formatter.after({
  "duration": 845108500,
  "status": "passed"
});
});