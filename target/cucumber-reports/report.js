$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage Search",
  "description": "",
  "id": "google-homepage-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 516011200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User can do a search from Google homepage using Google Search button",
  "description": "",
  "id": "google-homepage-search;user-can-do-a-search-from-google-homepage-using-google-search-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type \u0027The name of the wind\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the Google Search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the third result is \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 7865392700,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWindIntoTheSearchField()"
});
formatter.result({
  "duration": 777243800,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickTheGoogleSearchButton()"
});
formatter.result({
  "duration": 1189214500,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 40460000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
      "offset": 20
    }
  ],
  "location": "StepTestGoogle.theThirdResultIsTheNameOfTheWindByPatrickRothfussGoodreads(String)"
});
formatter.result({
  "duration": 16910892100,
  "status": "passed"
});
formatter.after({
  "duration": 4861588100,
  "status": "passed"
});
formatter.before({
  "duration": 4434800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User can do a search from Google homepage using the suggestions",
  "description": "",
  "id": "google-homepage-search;user-can-do-a-search-from-google-homepage-using-the-suggestions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027The name of the w\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the third result is \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 6010794000,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 159574200,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 548872000,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 1342892000,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 23752600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
      "offset": 20
    }
  ],
  "location": "StepTestGoogle.theThirdResultIsTheNameOfTheWindByPatrickRothfussGoodreads(String)"
});
formatter.result({
  "duration": 10662829000,
  "status": "passed"
});
formatter.after({
  "duration": 4858963500,
  "status": "passed"
});
});