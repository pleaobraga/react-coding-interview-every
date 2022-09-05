import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ListHeader from '.';
import { DISPLAY_MODE_CARD } from '../../../constants/types';
import { TestIDs } from '../../../testing';

describe('CompanyCard Component tests', () => {
  const props = {
    title: 'title',
    pageSize: 10,
    displayMode: DISPLAY_MODE_CARD,
    onPageSizeChange: jest.fn(),
    onDiplayModeChange: jest.fn(),
  };

  it('Testing render', () => {
    const { getByText, getByTestId } = render(<ListHeader {...props} />);
    expect(getByText(props.title)).toBeDefined();
    expect(getByText(props.pageSize)).toBeDefined();
    expect(getByTestId(TestIDs.switcherDisplayMode)).toBeDefined();
    fireEvent.click(getByTestId(TestIDs.switcherDisplayMode));
  });
});
