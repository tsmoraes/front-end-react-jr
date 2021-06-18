import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

it('teste da classe Home', () => {
  const { getByText } = render(<Home />);
  expect(getByText(/teste segware do brasil/i)).toBeInTheDocument();
});