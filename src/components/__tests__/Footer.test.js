import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer components', () => {
  test('renders logo and copyright text in footer', () => {
    const { getByRole: getByRoleFooter, getByText } = render(<Footer />);

    const logoHeadingFooter = getByRoleFooter('heading', { level: 1 });
    expect(logoHeadingFooter).toBeInTheDocument();

    const copyrightText = getByText('©', { exact:false });
    expect(copyrightText).toBeInTheDocument();
  });
});
