package co.com.pruebatecnica.pages.google;

import co.com.pruebatecnica.exceptions.WebActionsException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

import static co.com.pruebatecnica.stepsdefinitions.step_google.StepTestGoogle.webAction;


public class GoogleResults {
    @FindBy(how = How.XPATH, using = "//div[@id='search']//h3")
    private List<WebElement> lnkResults;

    @FindBy(how = How.XPATH, using = "//div[@id='result-stats']")
    private WebElement opcAllResults;

    @FindBy(how = How.XPATH, using = "//h1[@id='bookTitle']")
    private WebElement lblNameBook;


    private int DEFAULT_TIME = 60;

    public boolean checkPage() {
        return webAction.isVisible(opcAllResults, DEFAULT_TIME);
    }

    public String getNameBook() throws WebActionsException {
        return webAction.getText(lblNameBook, DEFAULT_TIME);
    }

    public String getSpecificResult(int position) throws WebActionsException {
        return webAction.getText(lnkResults.get(position), DEFAULT_TIME);
    }

    public void clickFirstResult(int position) throws WebActionsException {
        webAction.click(lnkResults.get(position), DEFAULT_TIME);
    }
}
