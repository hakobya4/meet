import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}}/>);
  });
  test('renders text input', () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('eventAmount');
  });
  test('by default number is 32',() => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toHaveValue("32");
  });
  test('user changes the default number', async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(numberTextBox, '{backspace}{backspace}10');
    expect(numberTextBox).toHaveValue("10");
  });

})