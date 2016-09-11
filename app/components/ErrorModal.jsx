var React = require('react');
var ReactDom = require('react-dom');
var ReactDomServer = require('react-dom/server');

var ErrorModal = React.createClass({   
  getDefaultProps: function(){
    return {
      tittle:'Error'
    };
  },
  propTypes:{
    tittle: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {tittle, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{tittle}</h4>
        <p>{message}</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );

    var $modal = $(ReactDomServer.renderToString(modalMarkup));
    $(ReactDom.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;