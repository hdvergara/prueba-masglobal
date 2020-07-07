$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage Search",
  "description": "",
  "id": "google-homepage-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 499952600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User can do a search from Google homepage using Google Search button",
  "description": "",
  "id": "google-homepage-search;user-can-do-a-search-from-google-homepage-using-google-search-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I type \u0027The name of the wind\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the Google Search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 7513171100,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWindIntoTheSearchField()"
});
formatter.result({
  "duration": 859112400,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickTheGoogleSearchButton()"
});
formatter.result({
  "duration": 1389421500,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 38668700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027The Name of the Wind - Patrick Rothfuss\u0027",
      "offset": 20
    }
  ],
  "location": "StepTestGoogle.theFirstResultIsTheNameOfTheWindPatrickRothfuss(String)"
});
formatter.result({
  "duration": 46478400,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c...he Name of the Wind [- Patrick Rothfus]s\u003e but was:\u003c...he Name of the Wind [by Patrick Rothfuss - Goodread]s\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat co.com.pruebatecnica.controllers.google.MainController.checkSpecificSearchResult(MainController.java:100)\r\n\tat co.com.pruebatecnica.stepsdefinitions.step_google.StepTestGoogle.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepTestGoogle.java:52)\r\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(src/main/resources/features/GoogleSearch.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4868824200,
  "status": "passed"
});
formatter.before({
  "duration": 9245300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can do a search from Google homepage using the suggestions",
  "description": "",
  "id": "google-homepage-search;user-can-do-a-search-from-google-homepage-using-the-suggestions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I type \u0027The name of the w\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 6551347400,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 197581600,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 557051601,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 949161900,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 49564800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027The Name of the Wind - Patrick Rothfuss\u0027",
      "offset": 20
    }
  ],
  "location": "StepTestGoogle.theFirstResultIsTheNameOfTheWindPatrickRothfuss(String)"
});
formatter.result({
  "duration": 132104200,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c...he Name of the Wind [- Patrick Rothfus]s\u003e but was:\u003c...he Name of the Wind [by Patrick Rothfuss - Goodread]s\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat co.com.pruebatecnica.controllers.google.MainController.checkSpecificSearchResult(MainController.java:100)\r\n\tat co.com.pruebatecnica.stepsdefinitions.step_google.StepTestGoogle.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepTestGoogle.java:52)\r\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(src/main/resources/features/GoogleSearch.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4949746000,
  "status": "passed"
});
formatter.before({
  "duration": 12535299,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User can do a search from Google homepage using Google Search button",
  "description": "",
  "id": "google-homepage-search;user-can-do-a-search-from-google-homepage-using-google-search-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I type \u0027The name of the wind\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click the Google Search button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "the third result is \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 6599868300,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWindIntoTheSearchField()"
});
formatter.result({
  "duration": 831484400,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickTheGoogleSearchButton()"
});
formatter.result({
  "duration": 1755087600,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 86711999,
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
  "duration": 140822101,
  "status": "passed"
});
formatter.after({
  "duration": 4940213400,
  "status": "passed"
});
formatter.before({
  "duration": 6183400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User can do a search from Google homepage using the suggestions",
  "description": "",
  "id": "google-homepage-search;user-can-do-a-search-from-google-homepage-using-the-suggestions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I type \u0027The name of the w\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the third result is \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 6735570801,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 300222600,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 565970600,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 1094513101,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 255367399,
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
  "duration": 172619900,
  "status": "passed"
});
formatter.after({
  "duration": 4646660200,
  "status": "passed"
});
});