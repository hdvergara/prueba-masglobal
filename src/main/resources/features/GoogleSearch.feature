Feature: Google Homepage Search

  Scenario: User can do a search from Google homepage using Google Search button
    Given I m on the homepage
    When I type 'The name of the wind' into the search field
    And I click the Google Search button
    Then I go to the search results page
    And the first result is 'The Name of the Wind - Patrick Rothfuss'

  Scenario: User can do a search from Google homepage using the suggestions
    Given I m on the homepage
    When I type 'The name of the w' into the search field
    And the suggestions list is displayed
    And I click on the first suggestion in the list
    Then I go to the search results page
    And the first result is 'The Name of the Wind - Patrick Rothfuss'







    #The Name of the Wind by Patrick Rothfuss - Goodreads