
  var React = require('react');
  var ReactWinJS = require('react-winjs');

  export default class SplitView_Web extends React.Component {
	  constructor(props) {
		super(props);
		this.state = {src:this.props.src,header:this.props.header};
		window.SplitView_Web = this;
	}

	componentDidMount(){

		//WinJS.UI.Fragments.renderCopy("./map/vendor/test.html", document.getElementById('SplitView_Web'))

	}

	handleListClick(targetID){

	}

  	render(){

		return (
				<div>
					<h2 className="win-h2">{this.state.header}</h2>
					<div
	  		  		id="SplitView_Web"
					style={{display:'inline',zIndex:0,position:"absolute", left:"0px", top:"48px", width:"100%", height:"100%"}}
						srsc={this.state.src}></div>
				</div>
			);

  	}

  }


  SplitView_Web.propTypes = {
   };
  SplitView_Web.defaultProps = {
};
