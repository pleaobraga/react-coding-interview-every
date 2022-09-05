import React from 'react';
import { render } from '@testing-library/react';
import Loading from '.';
import { TestIDs } from '../../../testing';

describe('Loading Component tests', () => {
  it('Testing render', () => {
    const title = 'Loading test';
    const { getByTestId, getByText } = render(<Loading title={title} />);
    expect(getByText(title)).toBeDefined();
    expect(getByTestId(TestIDs.spinner)).toBeDefined();
  });
});
