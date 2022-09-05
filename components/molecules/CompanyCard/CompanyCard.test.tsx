import React from 'react';
import { render } from '@testing-library/react';
import CompanyCard from '../CompanyCard';

describe('CompanyCard Component tests', () => {
  const company = {
    name: 'testName',
    company: 'testDescription',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g',
  } as any;

  it('Testing render', () => {
    const name = new RegExp(company.name);
    const country = new RegExp(`Company from ${company.description}`);
    const { getByText } = render(<CompanyCard item={company} />);
    expect(getByText(name)).toBeDefined();
    expect(getByText(country)).toBeDefined();
  });
});
