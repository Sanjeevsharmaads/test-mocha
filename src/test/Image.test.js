import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import Image from '../Image.js';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Image Component testing', function() {

  it('Image renders main message', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.find('img'))
  });

  chai.use(chaiEnzyme())

})