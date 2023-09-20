import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventDetails from '../components/Event';
import mockData from '../mock-data';

describe('<EventComponent /> component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<EventDetails />);
  });


  test('renders event summary', () => {
    expect(EventComponent.queryByText(mockData[1].summary)).toBeInTheDocument();
  });
  test('renders event location', () => {
    expect(EventComponent.queryByText(mockData[1].location)).toBeInTheDocument();
  });
  test('renders event start time', () => {
    expect(EventComponent.queryByText(mockData[1].created)).toBeInTheDocument();
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
    const eventKindON = EventComponent.queryByText('calendar#event');
    expect(eventKindON).toBeInTheDocument();
  });

  test('When user clicks hide details, details are hidden', async()=>{
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText('Show Details');
    await user.click(showButton);
    const hideButton = EventComponent.queryByText('Hide Details');
    await user.click(hideButton);
    const eventKindOFF = EventComponent.queryByText('calendar#event');
    expect(eventKindOFF).not.toBeInTheDocument();
  })
});