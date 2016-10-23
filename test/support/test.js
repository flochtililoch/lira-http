'use strict';

const chai = require('chai'),
      chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

global.chaiAsPromised = chaiAsPromised;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
global.expectation = (expectation) => require(`../expectations/${expectation}`);
