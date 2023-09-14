import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'mobx-react';
import userEvent from '@testing-library/user-event';

import { RootStore } from '../../store/RootStore';

import Schedule from './Shedule/Schedule';
import Modal from './Modal';
import Mail from './Mail';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const setSuccess = jest.fn();
const setActive = jest.fn();

describe('SchedulePage tests', () => {
  afterEach(cleanup);

  it('render sschedule component', () => {
    render (
      <Provider ApplicationIdStore={RootStore}>
        <BrowserRouter>
          <Schedule setSuccess={setSuccess} />
        </BrowserRouter>
      </Provider>,
    );

    const employmentElement = screen.getByText('Continuation of the application');
    expect(employmentElement).toBeInTheDocument();
  });

  it('render modal component', () => {
    render (
      <Provider ApplicationIdStore={RootStore}>
        <BrowserRouter>
          <Modal active={true} setActive={setActive} />
        </BrowserRouter>
      </Provider>,
    );

    const employmentElement = screen.getByText('Deny');
    expect(employmentElement).toBeInTheDocument();
  });

  it('render mail component', () => {
    render (<Mail />);
    const finishElement = screen.getByText(/Documents are formed/i);
    expect(finishElement).toBeInTheDocument();
  });
});