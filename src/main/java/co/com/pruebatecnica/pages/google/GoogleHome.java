package co.com.pruebatecnica.pages.google;

import co.com.pruebatecnica.exceptions.WebActionsException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

import static co.com.pruebatecnica.stepsdefinitions.step_google.StepTestGoogle.webAction;

public class GoogleHome {

    @FindBy(how = How.NAME, using = "q")
    private WebElement inputSearchField;

    @FindBy(how = How.XPATH, using = "//input[@name='q']//parent::div")
    private WebElement txtSearchField;

    @FindBy(how = How.XPATH, using = "//div[@class='FPdoLc tfB0Bf']//input[@name='btnK']")
    private WebElement btnGoogleSearch;

    @FindBy(how = How.XPATH, using = "//div[@class='FPdoLc VlcLAe']//input[@name='btnI']")
    private WebElement btnImFeelingLucky;

    @FindBy(how = How.XPATH, using = "//img[@alt='Google']")
    private WebElement imgGoogle;

    @FindBy(how = How.XPATH, using = "//ul[@role='listbox']")
    private WebElement ulSuggestionList;

    @FindBy(how = How.XPATH, using = "//ul[@role='listbox']/li")
    private List<WebElement> ulSearchSuggestionElements;

    private int DEFAULT_TIME = 60;

    public GoogleHome() {

    }

    public void typeSearch(String textToSearch) throws WebActionsException {
        webAction.sendText(inputSearchField, textToSearch, DEFAULT_TIME);
    }

    public void closeSearchList() throws WebActionsException {
        webAction.waitVisible(ulSuggestionList, DEFAULT_TIME);
        webAction.click(imgGoogle, DEFAULT_TIME);
    }

    public boolean isSuggestionListVisible() {
        return webAction.isVisible(ulSuggestionList, DEFAULT_TIME);
    }

    public void pressSearchButton() throws WebActionsException {
        webAction.click(btnGoogleSearch, DEFAULT_TIME);
    }

    public boolean checkPage() throws Exception {
        return webAction.isVisible(btnGoogleSearch, DEFAULT_TIME);
    }

    public int getSuggestedOptionsQty() {
        return ulSearchSuggestionElements.size();
    }

    public void clickOnElementFromSuggestionList(int elementPosition) throws Exception {
        webAction.click(ulSearchSuggestionElements.get(elementPosition), DEFAULT_TIME);
    }
}
