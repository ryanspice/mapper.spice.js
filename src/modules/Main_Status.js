/* @flow */

import React from 'react';
import ReactWinJS from 'react-winjs';

export default class Main_Status extends ReactWinJS.AppBar {

	constructor(props:Object){

		super(props);

	}

	render(){

		let files:number = 0;
		let words:number = 0;

			return (
				<div>

	                <ReactWinJS.AppBar.ContentCommand
	                    key="content"
	                    icon="accept"
	                    label="Accept">

	                    <input placeholder="..." className="win-textbox win-interactive spice-commandbox" type="text" />

	                </ReactWinJS.AppBar.ContentCommand>

				</div>
			);

	}

}
