# MeetApp

MeetApp is an app where users can login and find new and upcoming events from Google Calendar. The users can login using their google account, filter the events by cities, specify how many events they would like to see, show and hide details of the event.

## Objective
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Table of Contents
- [Features](#Features)
- [Screenshots](#Screenshots)
- [Technical_Requirements](#Technical_Requirements)
- [Dependencies](#Dependencies)
- [Environment](#Environment)
- [Google_Authorization](#Google_Authorization)
- [User_Stories](#User_Stories)

## Features
- Filter Events by City
- Show/Hide Event Details
- Specify the Number of Events
- Use the App When Offline
- Add an App Short cut to the Home Screen
- Display Charts Visualizing Event Details

## Screenshots

<img src ="https://github.com/hakobya4/meet/assets/108638724/ddff23e8-29a3-4059-ba4d-439f64785a2f" width="400" height="200"/>
<img src ="https://github.com/hakobya4/meet/assets/108638724/1264a4a7-7208-41a0-bc99-491677018aa0" width="400" height="200"/>
<img src ="https://github.com/hakobya4/meet/assets/108638724/3672e48b-2a7f-4f30-92c1-3b516061ec3d" width="400" height="200"/>

<img src ="https://github.com/hakobya4/meet/assets/108638724/4b93e588-8182-4a7c-a2a7-d6449e3d666a" width="200" height="400"/>
<img src ="https://github.com/hakobya4/meet/assets/108638724/9e2256c7-4c2e-460e-a603-248833e450db" width="200" height="400"/>
<img src ="https://github.com/hakobya4/meet/assets/108638724/db2b28c7-c062-4648-9d27-1ac2e3ea4fd3" width="200" height="400"/>

## Technical_Requirements
- The app is a React application.
- The app is built using the TDD(Test Driven Development) technique.
- The app uses the Google Calendar API and OAuth2 authentication.
- The app uses serverless functions (AWS lambda) for the authorization server instead of using a traditional server.
- The app’s code is hosted in a Git repository on GitHub.
- The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app passes Lighthouse’s PWA checklist.
- The app works offline or in slow network conditions with the help of a service worker.
- Users may install the app on a desktop and add the app to their home screen on mobile.
- The app implements an alert system using an OOP(Object-oriented programming) approach to show information to the user.
- The app uses data visualization.
- The app is covered by tests with a coverage rate >= 90%.
- The app is monitored using an online performance monitoring tool.

## Dependencies
To install the dependencies for this app run npm install after forking the code.
- React
- React Testing Library
- Serverless
- Bootstrap
- Recharts
- Puppeteer
- Jest-Cucumber
- Atatus
- Gh-pages

## Environment
- React: Create a react app using "npx create-react-app meet --template cra-template-pwa --use-npm"
- Run your app using "npm run start" and "npm run deploy" to deploy (make sure you change "homepage": "https://YOUR_USER_NAME.github.io/meet" in the package.json file to reflect your username"
- Create AWS account, run "npm install -g serverless", Create New Access Key and download it, and run "serverless config credentials --provider aws --key ACCESS_KEY_ID --secret SECRET_ACCESS_KEY"(customise it with the information


## Google_Authorization
- Create a project in [Google API console](https://console.developers.google.com/)
- Click on Enable APIs and Services for Google Calendar API
- Click on Create Credentials click Next and fill out
- Include scope '/auth/calendar.events.public.readonly'
- Click Create and download credentials
- Add credentials by inputing them into config.json file in auth-server
- If using in test mode add a test gmail account


## User_Stories
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
