$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/ScenarioUserStorie.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage Search",
  "description": "",
  "id": "google-homepage-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User can search with \u0027Google Search\u0027",
  "description": "",
  "id": "google-homepage-search;user-can-search-with-\u0027google-search\u0027",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "the first result is \u0027\u003cResultado\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I go to the \u0027Patrick Rothfuss - The Books\u0027 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "google-homepage-search;user-can-search-with-\u0027google-search\u0027;",
  "rows": [
    {
      "cells": [
        "Resultado"
      ],
      "line": 13,
      "id": "google-homepage-search;user-can-search-with-\u0027google-search\u0027;;1"
    },
    {
      "cells": [
        "The Name of the Wind - Patrick Rothfuss"
      ],
      "line": 14,
      "id": "google-homepage-search;user-can-search-with-\u0027google-search\u0027;;2"
    },
    {
      "cells": [
        "The Name of the Wind by Patrick Rothfuss - Goodreads"
      ],
      "line": 15,
      "id": "google-homepage-search;user-can-search-with-\u0027google-search\u0027;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 482940800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User can search with \u0027Google Search\u0027",
  "description": "",
  "id": "google-homepage-search;user-can-search-with-\u0027google-search\u0027;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I go to the \u0027Patrick Rothfuss - The Books\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 7979036600,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWindIntoTheSearchField()"
});
formatter.result({
  "duration": 794445100,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickTheGoogleSearchButton()"
});
formatter.result({
  "duration": 1350059300,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 23625500,
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
  "duration": 46152700,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c...he Name of the Wind [- Patrick Rothfus]s\u003e but was:\u003c...he Name of the Wind [by Patrick Rothfuss - Goodread]s\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat co.com.pruebatecnica.controllers.google.MainController.checkSpecificSearchResult(MainController.java:103)\r\n\tat co.com.pruebatecnica.stepsdefinitions.step_google.StepTestGoogle.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepTestGoogle.java:52)\r\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(src/main/resources/features/ScenarioUserStorie.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstResultLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepTestGoogle.iGoToThePatrickRothfussTheBooksPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4871875900,
  "status": "passed"
});
formatter.before({
  "duration": 5299100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User can search with \u0027Google Search\u0027",
  "description": "",
  "id": "google-homepage-search;user-can-search-with-\u0027google-search\u0027;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "the first result is \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I go to the \u0027Patrick Rothfuss - The Books\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 6400348200,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWindIntoTheSearchField()"
});
formatter.result({
  "duration": 791639100,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickTheGoogleSearchButton()"
});
formatter.result({
  "duration": 1122665300,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 23466100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
      "offset": 20
    }
  ],
  "location": "StepTestGoogle.theFirstResultIsTheNameOfTheWindPatrickRothfuss(String)"
});
formatter.result({
  "duration": 42117900,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstResultLink()"
});
formatter.result({
  "duration": 3469762100,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToThePatrickRothfussTheBooksPage()"
});
formatter.result({
  "duration": 69071600,
  "status": "passed"
});
formatter.after({
  "duration": 4864706000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User can search by using the suggestions",
  "description": "",
  "id": "google-homepage-search;user-can-search-by-using-the-suggestions",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I type \u0027The name of the w\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the first result is \u0027\u003cResultado\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I go to the \u0027Patrick Rothfuss - The Books\u0027 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "google-homepage-search;user-can-search-by-using-the-suggestions;",
  "rows": [
    {
      "cells": [
        "Resultado"
      ],
      "line": 28,
      "id": "google-homepage-search;user-can-search-by-using-the-suggestions;;1"
    },
    {
      "cells": [
        "The Name of the Wind - Patrick Rothfuss"
      ],
      "line": 29,
      "id": "google-homepage-search;user-can-search-by-using-the-suggestions;;2"
    },
    {
      "cells": [
        "The Name of the Wind by Patrick Rothfuss - Goodreads"
      ],
      "line": 30,
      "id": "google-homepage-search;user-can-search-by-using-the-suggestions;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3680500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User can search by using the suggestions",
  "description": "",
  "id": "google-homepage-search;user-can-search-by-using-the-suggestions;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I type \u0027The name of the w\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I go to the \u0027Patrick Rothfuss - The Books\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 6843471500,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 172147200,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 567216300,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 958724800,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 46549100,
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
  "duration": 134338300,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c...he Name of the Wind [- Patrick Rothfus]s\u003e but was:\u003c...he Name of the Wind [by Patrick Rothfuss - Goodread]s\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat co.com.pruebatecnica.controllers.google.MainController.checkSpecificSearchResult(MainController.java:103)\r\n\tat co.com.pruebatecnica.stepsdefinitions.step_google.StepTestGoogle.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepTestGoogle.java:52)\r\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(src/main/resources/features/ScenarioUserStorie.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstResultLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepTestGoogle.iGoToThePatrickRothfussTheBooksPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4621087300,
  "status": "passed"
});
formatter.before({
  "duration": 2969100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User can search by using the suggestions",
  "description": "",
  "id": "google-homepage-search;user-can-search-by-using-the-suggestions;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I m on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I type \u0027The name of the w\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the first result is \u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I go to the \u0027Patrick Rothfuss - The Books\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepTestGoogle.ImOnTheHomepage()"
});
formatter.result({
  "duration": 6216817600,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 151989400,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 536197100,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 1175647700,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 26243900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027The Name of the Wind by Patrick Rothfuss - Goodreads\u0027",
      "offset": 20
    }
  ],
  "location": "StepTestGoogle.theFirstResultIsTheNameOfTheWindPatrickRothfuss(String)"
});
formatter.result({
  "duration": 41577500,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iClickOnTheFirstResultLink()"
});
formatter.result({
  "duration": 2914107900,
  "status": "passed"
});
formatter.match({
  "location": "StepTestGoogle.iGoToThePatrickRothfussTheBooksPage()"
});
formatter.result({
  "duration": 65012100,
  "status": "passed"
});
formatter.after({
  "duration": 4861658300,
  "status": "passed"
});
});