package co.com.pruebatecnica.stepsdefinitions.step_google;

import co.com.pruebatecnica.controllers.google.MainController;
import co.com.pruebatecnica.generalactions.WebAction;
import co.com.pruebatecnica.logs.Log;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepTestGoogle {
    public static WebAction webAction;
    private MainController mainController;

    @Before
    public void setUp() {
        webAction = new WebAction("Evidences", "Test_Google");
    }

    @After
    public void tearDown() {
        webAction.closeBrowser();
    }

    @Given("I m on the homepage$")
    public void ImOnTheHomepage() {
        mainController = new MainController();
        mainController.startBrowser();
        mainController.goToGoogleHome();

    }

    @When("^I type 'The name of the wind' into the search field$")
    public void iTypeTheNameOfTheWindIntoTheSearchField() {
        mainController.typeInGoogleSearchField("The name of the wind", true);
    }

    @And("^I click the Google Search button$")
    public void iClickTheGoogleSearchButton() {
        mainController.clickOnGoogleSearchButton();
    }

    @Then("^I go to the search results page$")
    public void iGoToTheSearchResultsPage() {
        mainController.checkGoogleResultsPage();
    }

    @And("^the first result is (.*?)$")
    public void theFirstResultIsTheNameOfTheWindPatrickRothfuss(String var) {
        mainController.checkSpecificSearchResult(var, 2);
    }

    @When("^I type 'The name of the w' into the search field$")
    public void iTypeTheNameOfTheWIntoTheSearchField() {
        mainController.typeInGoogleSearchField("The Name of the w", false);
    }

    @And("^the suggestions list is displayed$")
    public void theSuggestionsListIsDisplayed() {
        mainController.checkSuggestionListIsDisplayed();
    }

    @And("^I click on the first suggestion in the list$")
    public void iClickOnTheFirstSuggestionInTheList() {
        mainController.clickOnSpecificElementFromSuggestionList(0);
    }

    @When("^I click on the first result link$")
    public void iClickOnTheFirstResultLink() {
        mainController.clickOnSpecificSearchResult(2);
    }

    @Then("^I go to the 'Patrick Rothfuss - The Books' page$")
    public void iGoToThePatrickRothfussTheBooksPage() {
        mainController.checkPageBook();
        //mainController.clickOnSpecificElementFromSuggestionList(2);
        Log.LOGGER.info("############################## Test Finished successfully ########################################");
    }
}
