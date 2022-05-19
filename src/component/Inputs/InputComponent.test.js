import { render, screen, fireEvent } from '@testing-library/react';
import InputComponent from './InputComponent';

describe('testing app input ', () => {
 let addInput;
  beforeEach(() =>{
    render(<InputComponent />);
    addInput = screen.getByText(/add row/i)
  });

  test('renders learn react link',  () => {
    fireEvent.click(screen.getByText(/show input/i))
     expect(screen.getByTestId('saludo')).toHaveValue('Hola Mundo');
  });

  test('add input with one click', () => {
    fireEvent.click(addInput);
    fireEvent.click(addInput);
    fireEvent.click(addInput);
    const inputs =screen.getAllByPlaceholderText('enter');
    expect(inputs.length).toBe(3);

  });

});
