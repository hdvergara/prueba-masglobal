package co.com.pruebatecnica.controllers.google;

import co.com.pruebatecnica.exceptions.WebActionsException;
import co.com.pruebatecnica.helpers.Browser;
import co.com.pruebatecnica.helpers.Properties;
import co.com.pruebatecnica.logs.Log;
import co.com.pruebatecnica.pages.google.GoogleHome;
import co.com.pruebatecnica.pages.google.GoogleResults;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import java.nio.file.Paths;

import static co.com.pruebatecnica.stepsdefinitions.step_google.StepTestGoogle.webAction;

public class MainController {

    private Properties properties = new Properties();
    private GoogleHome googleHome;
    private GoogleResults googleResults;


    public void startBrowser() {

        try {
            webAction.startWebApp(configureBrowser(), properties.getFieldProperties("urlAplication"));
        } catch (Throwable e) {
            Log.LOGGER.error("Ocuarrio un error realizando una de las acciones de la prueba" + e);
            Assert.fail();
        }
    }

    public Browser configureBrowser() {
        Browser browserConfig = new Browser();
        browserConfig.setIncognito(true);
        browserConfig.setDriverVersion(properties.getFieldProperties("versionBrowser"));
        browserConfig.setBrowser(Browser.Browsers.CHROME);
        browserConfig.setMaximized(true);
        return browserConfig;
    }

    public void goToGoogleHome() {
        String operation = "Go to google home page";
        try {
            Log.LOGGER.info("----------Operation: ".concat(operation).concat("----------"));
            googleHome = PageFactory.initElements(webAction.getDriver(), GoogleHome.class);
            Assert.assertTrue("The loaded page isn't google", googleHome.checkPage());
            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void typeInGoogleSearchField(String searchString, boolean closeSearchList) {
        String operation = "Type in the google search field";
        try {
            Log.LOGGER.info("----------Operation: ".concat(operation).concat("----------"));
            googleHome.typeSearch(searchString);
            if (closeSearchList) googleHome.closeSearchList();
            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void clickOnGoogleSearchButton() {
        String operation = "Click on the google search button";
        try {
            Log.LOGGER.info("----------Operation: ".concat(operation).concat("----------"));
            googleHome.pressSearchButton();
            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void checkGoogleResultsPage() {
        String operation = "Check the google results page";
        try {
            Log.LOGGER.info("----------Operation: ".concat(operation).concat("----------"));
            googleResults = PageFactory.initElements(webAction.getDriver(), GoogleResults.class);
            Assert.assertTrue("The loaded page isn't google results page", googleResults.checkPage());
            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void checkSpecificSearchResult(String resultExpected, int position) {
        String operation = "Check the first google result";
        resultExpected = resultExpected.replace("'", "");
        try {
            Log.LOGGER.info("----------Operation: ".concat(operation).concat("----------"));
            String resultObtained = googleResults.getSpecificResult(position);
            Assert.assertEquals("the result was '".concat(resultObtained).concat("' but the expected is '")
                    .concat(resultExpected).concat("'."), resultExpected, resultObtained);
            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void checkPageBook() {
        String operation = " Check that page of book is displayed";
        String resultExpected = "The Name of the Wind";
        try {
            String resultObtained = googleResults.getNameBook();
            Assert.assertEquals("the result was '".concat(resultObtained).concat("' but the expected is '")
                    .concat(resultExpected.concat("'.")), resultExpected, resultObtained);
            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void checkSuggestionListIsDisplayed() {
        String operation = "Check that the suggestion list is displayed";
        try {
            Log.LOGGER.info("----------Operation: ".concat(operation).concat("----------"));
            boolean isSuggestionListVisible = googleHome.isSuggestionListVisible();
            Assert.assertTrue("The suggestion list isn't displayed", isSuggestionListVisible);
            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void clickOnSpecificElementFromSuggestionList(int elementPosition) {
        String operation = "Click on specific element of the suggestion list";
        try {
            Log.LOGGER.info("----------Operation: ".concat(operation).concat("----------"));
            int suggestedOptions = googleHome.getSuggestedOptionsQty();
            if (suggestedOptions < (elementPosition + 1))
                throw new Exception("The list only have".concat(String.valueOf(suggestedOptions)).concat("elements"));
            googleHome.clickOnElementFromSuggestionList(elementPosition);
            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void clickOnSpecificSearchResult(int position) {
        String operation = "Click on the first search result";
        try {
            Log.LOGGER.info("----------Operation: ".concat(operation).concat("----------"));

            googleResults.clickFirstResult(position);

            Log.LOGGER.info("----------Operation successfully completed----------\n");
        } catch (Exception e) {
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }


}
