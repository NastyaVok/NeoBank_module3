import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { mockLocalStorage } from '../../test-utils/mockLocalStorage';

import Cards from './Cards';
import Features from './Features';
import Support from './Support';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const { getItemMock } = mockLocalStorage();

describe('MainPage tests', () => {
  it('render cards component', async () => {
    render ( 
      <BrowserRouter>
        <Cards />
      </BrowserRouter>,
    );
    expect(
      screen.getByText('Choose the card'),
    ).toBeInTheDocument();
      
    await userEvent.click(screen.getByText('Choose the card'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/loan');
  });
    
  it('render features component', async () => {
    render (<Features />);
    const featureElement = screen.getByText('We Provide Many Features You Can Use');
    expect(featureElement).toBeInTheDocument();
  });

  it('render support component', () => {
    render(<Support />);
    const supportElement = screen.getByText('Support');
    expect(supportElement).toBeInTheDocument();
  });

  it('expects something to be in localStorage in support component', async () => {
    render(<Support />);
    await userEvent.click(screen.getByText('Subscribe'));
    expect(getItemMock).toHaveBeenCalled();
  });
});
