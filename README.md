# meet
FEATURE 1: Filter Events by City.

As a user, I would like to be able to filter events by city. So that I can see a list of events taking place in that city.

SCENARIO 1:

Given user hasn’t searched for any city; When the user opens the app; Then the user should not see a list of upcoming events.

SCENARIO 2

Given the main page is open; When a user starts typing in the city textbox; Then the user should receive a list of cities (suggestions) that match what they’ve typed.

SCENARIO 3

Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing; When the user selects a city (e.g., “Berlin, Germany”) from the list; Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

FEATURE 2: Show/Hide Event Details.

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

SCENARIO 1

Given the main page is open; When the user has not interacted with the details of the event; Then the details of the event will be hidden from the user.

SCENARIO 2

Given the main page is open and list of events are shown; When the user interacts with the show details button; Then the details of the event will be shown.

SCENARIO 3

Given the details of the event are shown; When the user interacts with the close details button; Then the details of the event will be hidden.




FEATURE 3: Specify Number of Events.

As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

SCENARIO 1: 

Given the user has not specified a number of upcoming event to be shown; When the user searches events in a city; Then the default number of events will be 32

SCENARIO 2:

Given the user has specified the number of upcoming event to be shown; When the user searches events in a city; Then the number of events will be the specified number.


FEATURE 4: Use the App When Offline.

As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

SCENARIO 1:

Given there is no internet connection; When the user interacts with the application; Then the user will be able to see their cached information.

SCENARIO 2:

Given the user has no internet connection; When the user interacts with information that is not cached; Then the app will show an error.

FEATURE 5: Add an App Shortcut to the Home Screen.

As a user, I would like to be able to add the app shortcut to my home screen, so I can open the app faster.

SCENARIO 1:

Given the user would like to install the application as a shortcut; When the user installs the application as a shortcut; Then a shortcut will be created on the user’s homescreen.

FEATURE 6: Display Charts Visualizing Event Details.

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

SCENARIO 1:

Given that the user is in the show details view of the application; When the user clicks on show graph; Then a graph will appear showing the number of events in a city


SERVERLESS

AWS Lambda will be used to authenticate a user logging into this app. Using the serverless method of hosting this application, makes it easier to deploy and share, and gives the application the ability to be scalable and cost-efficient.
