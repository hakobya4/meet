Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given user hasn’t interacted with the app/ show detail button
        When the user opens the app
        Then the details of the event will be hidden from the user.

    Scenario: User can expand an event to see details
        Given the events are loaded on the app
        When user clicks the show details button
        Then the details of the event will be shown
        And the hide details button appears
    Scenario: User can collapse an event to hide details
        Given the events are loaded on the app
        And user has clicked the show details button
        When user clicks the hide details button
        Then the details of the event will collapse
        And the hide details button disappears