import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'mobx-react';
import userEvent from '@testing-library/user-event';

import { RootStore } from '../../store/RootStore';

import Signing from './Signing';
import Mail from './Mail';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const setSuccess = jest.fn();

describe('DocumentPage tests', () => {
  afterEach(cleanup);

  it('render signing component', async () => {
    render (
      <Provider ApplicationIdStore={RootStore}>
        <BrowserRouter>
          <Signing setSuccess={setSuccess} />
        </BrowserRouter>
      </Provider>,
    );

    const employmentElement = screen.getByText('Signing of documents');
    expect(employmentElement).toBeInTheDocument();
  });

  it('click to agree is enabling send in signing component', async () => {
        
    render (
      <Provider ApplicationIdStore={RootStore}>
        <BrowserRouter>
          <Signing setSuccess={setSuccess} />
        </BrowserRouter>
      </Provider>,
    );
    const buttonElement = screen.getByText('Send');  
    expect(buttonElement).toBeDisabled();
    await userEvent.click(screen.getByText('I agree'));
    expect(buttonElement).toBeEnabled();
  });

  it('render mail component', () => {
    render (<Mail />);
    const decisionElement = screen.getByText(/signed/i);
    expect(decisionElement).toBeInTheDocument();
  });
});