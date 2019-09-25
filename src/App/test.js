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
});
