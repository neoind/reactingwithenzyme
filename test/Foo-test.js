import React from 'react';
import { expect } from 'chai';
//import { shallow, mount, render } from 'enzyme';
var enzyme = require('enzyme');
import Foo from '../src/Foo';
//var Foo = require('../src/Foo.js');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(enzyme.shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(enzyme.shallow(<Foo />).is('.foo')).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(enzyme.mount(<Foo />).find('.foo').length).to.equal(1);
  });
});
