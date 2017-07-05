var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
  describe('handle set timer', () => {
    it('should set state to started and count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChanged('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 1001);
    });

    it('should set state to paused and stop counting', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChanged('started');

      setTimeout(() => {
        timer.handleStatusChanged('paused');
      }, 2001);

      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 3001);
    });
  });
});
