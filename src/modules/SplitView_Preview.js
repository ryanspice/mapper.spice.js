/* @flow */

//import SpiceJS from "../sjs/spice.js";

//import SpiceJS from "../../../spice.js/src/spice.js";

import SpiceJS from "ryanspice2016-spicejs";

import React from 'react';

import ReactWinJS from 'react-winjs';

var STARTED = false;

export default class SplitView_Preview extends React.Component {

	constructor(props:Object) {

	super(props);

	this.state=({
		project:this.props.project
	});

	window.SplitView_Preview = this;

	}

	componentDidMount(){

		window._App.main.draw = ()=>{

			let exe = JSON.parse(this.state.project.code).draw;
			try {eval(exe);} catch(e){};

		};

		if (!STARTED)
			_App.start(100,100), STARTED = true;

		 document.getElementById('AppPreview').appendChild(document.getElementById('canvas_0'));
		 document.getElementById('AppPreview').appendChild(document.getElementById('buffer_0'));
		 document.getElementById('AppPreview').appendChild(document.getElementById('blitter_0'));

	}



	componentWillUnmount(){

		document.body.appendChild(document.getElementById('canvas_0'));
		document.body.appendChild(document.getElementById('buffer_0'));
		document.body.appendChild(document.getElementById('blitter_0'));

	}

	render(){

	return (
		<div id="AppPreview">

		</div>
		);

	}

  }
