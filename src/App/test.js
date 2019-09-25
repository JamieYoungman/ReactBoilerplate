import React from 'react';
import { shallow } from 'enzyme';

import App from '.';

describe('App', () => {
  let element;
  beforeEach(() => {
    element = shallow(<App />);
  });
  it('should render something', () => {
    expect(element.find('div')).toHaveLength(1);
  });

  it('should have a H1', () => {
    expect(element.find('H1')).toHaveLength(1);
  });
});
