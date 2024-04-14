import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  test('renders logo and search input', () => {
    const { getByRole, getByPlaceholderText } = render(<Header />);

    const logoHeading = getByRole('heading', { level: 1 });
    expect(logoHeading).toBeInTheDocument();

    const svgIcon = document.querySelector('.logo svg');
    expect(svgIcon).toBeInTheDocument();

    const searchInput = getByPlaceholderText('Search for', { exact:false });
    expect(searchInput).toBeInTheDocument();
  });
});
