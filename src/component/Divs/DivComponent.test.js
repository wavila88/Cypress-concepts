import { fireEvent, render, screen } from '@testing-library/react';
import DivComponent from './DivComponent';

describe('Testing divs changes ', () => {
    let div;
    beforeEach(() => {
        render(<DivComponent/>);
        div = screen.getByTestId('div-color-change')

    });

    test('Test change on hover', () => {
       expect(div).toHaveAttribute('class','div-color');
       fireEvent.mouseOver(div);
       expect(div).toHaveAttribute('class', 'div-color-blue');
       fireEvent.mouseLeave(div);
       expect(div).toHaveAttribute('class', 'div-color');
    });
});