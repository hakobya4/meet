Feature: SpecifyNumberofEvents
    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given user hasn’t inputed number of events to be shown
        When the app loads the events
        Then the default umber of events loaded will be 32

    Scenario: User can change the number of events displayed.
        Given the app has loaded events
        When user inputs 10 as the number of events
        Then the number of events loaded will be the inputed number
