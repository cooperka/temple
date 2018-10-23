// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Component from './component';

it('renders as expected', () => {
  const component = renderer.create(
    <Component />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
