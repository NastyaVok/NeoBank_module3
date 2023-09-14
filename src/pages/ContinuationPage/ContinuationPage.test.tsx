import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, cleanup, act, waitFor } from '@testing-library/react';
import { Provider } from 'mobx-react';
import userEvent from '@testing-library/user-event';

import { RootStore } from '../../store/RootStore';

import Scoring from './Scoring';
import Mail from './Mail';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const setSuccess = jest.fn();

describe('ContinuationPage tests', () => {
  afterEach(cleanup);

  it('render scoring component', () => {

    render (
      <Provider ApplicationIdStore={RootStore}>
        <BrowserRouter>
          <Scoring setSuccess={setSuccess} />
        </BrowserRouter>
      </Provider>,
    );

    const employmentElement = screen.getByText('Employment');
    expect(employmentElement).toBeInTheDocument();
  });

  it('ScoringForm input is working', async () => {

    render (
      <Provider ApplicationIdStore={RootStore}>
        <BrowserRouter>
          <Scoring setSuccess={setSuccess} />
        </BrowserRouter>
      </Provider>,
    );

    userEvent.type(screen.getByPlaceholderText('For example 2'), '2');
    userEvent.click(screen.getByRole('button', { name: /Continue/i }));
    expect(await screen.findByText('2')).toBeInTheDocument();
  });

  it('render mail component', () => {
    render (<Mail />);
    const decisionElement = screen.getByText(/decision/i);
    expect(decisionElement).toBeInTheDocument();
  });
});