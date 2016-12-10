var React = require('react');
var ReactWinJS = require('react-winjs');

export default class Dialogue_SettingsMessage extends React.Component {

 	constructor(props) {
	    super(props);

		window.Dialogue_SettingsMessage = this;
	}

	render(){

		return (

			<ReactWinJS.ContentDialog
			style={{zIndex:2000}}
			ref="dialog"
			id="Dialogue_UrgentMessage"
			title="Urgent Message"
			primaryCommandText="OK"
			secondaryCommandText="Cancel"
			>
			<div>
			This content will appear in the body of the ContentDialog. You can put <i>arbitrary</i> HTML in here.
			</div>
			</ReactWinJS.ContentDialog>

		);

	}

}
