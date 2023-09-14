import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';

import Finish from './Finish';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));


describe('CodePage tests', () => {
  afterEach(cleanup);

  it('render finish component', () => {
    render (
      <BrowserRouter>
        <Finish />
      </BrowserRouter>,
    );
    const finishElement = screen.getByText(/Congratulations!/i);
    expect(finishElement).toBeInTheDocument();
  });
});