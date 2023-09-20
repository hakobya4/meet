import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventDetails from '../components/Event';
import { getEvents } from '../api';

describe('<EventComponent /> component', () => {
  let EventComponent;
  let allEvents;
  beforeEach(async() => {
    allEvents = await getEvents();
    EventComponent = render(<EventDetails event={allEvents[0]} />);
  });


  test('renders event summary', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });
  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });
  test('renders event start time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });
  test('has the button to show details', () => {
    const button = EventComponent.queryByText('Show Details');
    expect(button).toBeInTheDocument();
  });
  test('has the button to hide details', async() => {
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText('Show Details');
    await user.click(showButton);
    const hideButton = EventComponent.queryByText('Hide Details');
    expect(hideButton).toBeInTheDocument();
  });

  test('by default details section should be hidden', () =>{
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  test('When user clicks show details, details are shown', async()=>{
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText('Show Details');
    await user.click(showButton);
    const eventKindON = EventComponent.queryByText('Show Details');
    const eventKindOFF = EventComponent.queryByText('Hide Details');
    expect(eventKindON).not.toBeInTheDocument();
    expect(eventKindOFF).toBeInTheDocument();
  });

  test('When user clicks hide details, details are hidden', async()=>{
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText('Show Details');
    await user.click(showButton);
    const hideButton = EventComponent.queryByText('Hide Details');
    await user.click(hideButton);
    const eventKindOFF = EventComponent.queryByText('Hide Details');
    const eventKindON = EventComponent.queryByText('Show Details');
    expect(eventKindOFF).not.toBeInTheDocument();
    expect(eventKindON).toBeInTheDocument();
  })
});