import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Button from '../src/components/button';

describe('Button', () => {
  it('should not be undefined', () => {
    const Component = TestUtils.renderIntoDocument(<Button />);
    const element = TestUtils.findRenderedDOMComponentWithTag(Component, 'div');
    expect(element).toBeTruthy();
  });
});
