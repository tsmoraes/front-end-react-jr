import React from 'react';
import { render } from '@testing-library/react';
import AppNavbar from './AppNavbar';

it('teste do link da NavBar', () => {
  const { getByText } = render(<AppNavbar />);
  expect(getByText(/home/i)).toBeInTheDocument();
});