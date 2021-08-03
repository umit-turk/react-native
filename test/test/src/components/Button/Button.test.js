import React from 'react';
import {render} from '@testing-library/react-native';
import Button from './Button';

/* test('should match with snapshot', () => {
  const comp = render(<Button />);
  expect(comp).toMatchSnapshot();
}); */

test('should render title correctly', () => {
    const testTitle = "title"
    const comp = render(<Button title={testTitle} />);

    const buttonText = comp.getByTestId("button-title").children;
    expect(buttonText).toBe(testTitle);
    console.log(buttonText)
})


