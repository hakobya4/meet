import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => { 
    test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent
    	given('user hasn’t inputed number of events to be shown', () => {
            AppComponent = render(<App />);
    	});

    	when('the app loads the events', async() => {
            const AppDOM = AppComponent.container.firstChild;
            const EventDOM = AppDOM.querySelector('#event-list');
    
            await waitFor(() => {
              const EventListItems = within(EventDOM).getAllByRole('listitem');
              expect(EventListItems.length).toBeGreaterThan(0)
            });
    	});

    	then('the default umber of events loaded will be 32', async() => {
            const AppDOM = AppComponent.container.firstChild;
            const EventDOM = AppDOM.querySelector('#event-list');
    
            await waitFor(() => {
              const EventListItems = within(EventDOM).getAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
    	    });
    	});
    });
     test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent
    	given('the app has loaded events', async() => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventDOM = AppDOM.querySelector('#event-list');
    
            await waitFor(() => {
              const EventListItems = within(EventDOM).getAllByRole('listitem');
              expect(EventListItems.length).toBeGreaterThan(0)
            });
    	});

    	when('user inputs 10 as the number of events', async() => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const NumberofEventDOM = AppDOM.querySelector('#number-of-events');
            const NumberofEvent = within(NumberofEventDOM).queryByRole('textbox');  
            await user.type(NumberofEvent, '{backspace}{backspace}10');
    	});

    	then('the number of events loaded will be the inputed number', async() => {
            const AppDOM = AppComponent.container.firstChild;
            const EventDOM = AppDOM.querySelector('#event-list');
    
            await waitFor(() => {
              const EventListItems = within(EventDOM).getAllByRole('listitem');
              expect(EventListItems.length).toBe(10)
            });
    	});
    });

});