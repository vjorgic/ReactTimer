var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.secondsRef.value;
    if(strSeconds.match(/^[0-9]*$/) && strSeconds !== '') {

      this.refs.secondsRef.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return(
      <div>
        <form ref="formRef" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="secondsRef" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
