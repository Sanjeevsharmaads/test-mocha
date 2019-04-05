import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../App.js';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

  it('App renders main message', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).equal('Hello World Sharma')
  });


  it('App renders check length', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).to.have.lengthOf(18);

  });


  it('App renders check empty status', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).not.to.be.empty;

  });

  it('App renders main message', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).to.have.className('App');
  });

  it('checked status',() => {
  	const wrapper = shallow(<App />);
  	expect(wrapper.find('#checked')).to.be.checked();
  });

  it('check style',() => {
  	const wrapper = shallow(<App/>);
  	expect(wrapper.find('div')).to.have.style('color');
  })

  it('check style property value',() => {
  	const wrapper = shallow(<App/>);
  	expect(wrapper.find('div')).to.have.style('color').equal('red');
  })

  		
  chai.use(chaiEnzyme())

})