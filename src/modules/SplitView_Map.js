
  var React = require('react');
  var ReactWinJS = require('react-winjs');

var listIterator = 0;

  export default class SplitView_Map extends React.Component {
	  constructor(props) {
		super(props);

		window.SplitView_Map = this;
	}

	componentWillReceiveProps(){


	}

	handleListClick(targetID){

	}

  	render(){

		return (
			<div>
				<h1 className="win-h1" style={{marginLeft:'0.75em'}}>Map:</h1>
				<iframe
	  		  		id="SplitView_Map"
					style={{display:'none',zIndex:-10,position:"absolute", left:"48px", top:"48px", width:"100%", height:"100%"}}
						src="./Map/Mapper.htm"></iframe>
						</div>
			);

  	}

  }


  SplitView_Map.propTypes = {
   };
  SplitView_Map.defaultProps = {
};
