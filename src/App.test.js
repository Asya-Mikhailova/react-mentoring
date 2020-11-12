import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  test('Should render correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
