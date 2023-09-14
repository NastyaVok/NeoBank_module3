import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';

import Steps from './Steps/Stepts';
import StepItem from './Steps/StepItem';
import Prescoring from './LoanForm/Prescoring';

const setTab = jest.fn();

describe('LoanPage tests', () => {
  it('render steps component', () => {
    render (<Steps />);
    const featureElement = screen.getByText('How to get a card');
    expect(featureElement).toBeInTheDocument();
  });

  it('render stepItem component', () => {
    render (<StepItem num={0} text={'stepItem'} />);
    const stepItemElement = screen.getByText('stepItem');
    expect(stepItemElement).toBeInTheDocument();
  });

  it('input is working in prescoring component', () => {
    render (<Prescoring tab={0} setTab={setTab}/>);
    const label = screen.getByText('Your first name');
    expect(label).toBeInTheDocument();
  });
});
