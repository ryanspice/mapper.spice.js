/* @flow */

import React from 'react';

import ReactWinJS from 'react-winjs';

type arr = [];

export default class project {

	static name:string;

	static references:Object = {};

	static properties = {
		_build:"0.0.0",
		_code:"InitalCODEInital",
		_list:[null],
	};

	/* GET/SET code and list */

	static get list():arr {

		return project.properties._list;

	}

	static set list(val:arr ) {

		project.properties._list = val;

	}

	static get code():string {

		return project.properties._code;

	}

	static set code(val:string):void {

		project.properties._code = val;

	}

	/* RETREIVING DATA FROM CODE */

	static get title():string {

		return project.read.title;

	}
	static get states():string {

		return project.read.states;

	}

	static get name():string {

		return 'undefined';

	}

	static get origin():string {

		return 'undefined';

	}

	/* RETREIVING DEFAULT DATA */

	static get build():mixed {

		return project.properties._build;

	}

	static get date():mixed {

		return new Date().getDate();

	}

	static get read(){

		return JSON.parse(project.properties._code);

	}

	static load(code:string):boolean {

		project.code = code;
		project.current = 0;
		project.list.unshift(JSON.parse(code));

		setTimeout(()=>{


			window.Projects_ListView.updateView();

		},250)
		//project.json = JSON.parse(code);

		//project.title = _code_['title'];


		//project.references.code.setState({code:code});
		//project.references.code.state.code = code;
		//project.references.code.innerText = code;

		//project.references.code.handleCode('s');
		//project.references.code.state.ss();
		//project.references.code.props.tt('a');
		//document.getElementById('homeCurrentJson').props.onTextChange("2");

		return true;

	}

}

window.project = project;
