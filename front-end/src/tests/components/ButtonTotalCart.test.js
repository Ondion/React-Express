import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import ButtonTotalCart from '../../components/ButtonTotalCart';

const useContext = jest.fn()

describe('ButtonTotalCart', () => {
  beforeEach(() => {
    // render(<App />);
    // render(<ButtonTotalCart
    //   useContext={useContext}
    // />);
  });

  it('1', () => {
    expect(ButtonTotalCart).toBeDefined();
    
    // const result = ButtonTotalCart()
    // expect(result).toBeTruthy()
  });
  
});
