var React  = require('react');
var chai = require('chai');
var enzyme  = require('enzyme');
var ExampleApplication = require('../src/MyComp');
// import ExampleApplication from '../src/MyComp';

describe("A suite", function() {
  it("MyComp conatins message", function() {
    chai.expect(enzyme.shallow(<ExampleApplication />).contains('Hello World')).to.not.equal(true);
  });

  // it("contains spec with an expectation", function() {
  //   expect(shallow(<Foo />).is('.foo')).to.equal(true);
  // });

  // it("contains spec with an expectation", function() {
  //   expect(mount(<Foo />).find('.foo').length).to.equal(1);
  // });
});
