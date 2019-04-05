import React from 'react';
import { configure, shallow, render,mount} from 'enzyme';
import chai, { expect } from 'chai';
import StateComp from '../StateComp.js';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('check state',() => {

  it('check state value',() =>{
    const wrapper = shallow(<StateComp />);
    expect(wrapper).to.have.state('name')
  })

  it('check state value',() =>{
    const wrapper = shallow(<StateComp />);
    expect(wrapper).to.not.have.state('name', 'baz')
  })


  it('check state value',() =>{
    const wrapper = shallow(<StateComp />);
    expect(wrapper).to.have.state('name').equal('sanjeev')
  })

  it('check state value',() =>{
    const wrapper = shallow(<StateComp />);
    expect(wrapper).to.have.state('name','sanjeev')
  })


  chai.use(chaiEnzyme())
})

