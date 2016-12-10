/* @flow */

import React from 'react';

import ReactWinJS from 'react-winjs';

import Home_Item from './Home_Item';

import project from '../project';

export default class Item_Code extends Home_Item {

	constructor(props:Object) {

		super(props);
		this.state={code:this.props.code,project:this.props.project};
	}

    componentDidMount() {
		console.log("#JACKAS");
    }

	render(){

		return (

			<Home_Item
				preview=""
				body=""
				id="homeCurrentJson"
				code=""	>

				<CodeDump
					code={this.props.code}
  				updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)}
			/>

			</Home_Item>

		);
	}

}

let codeAreaCount:number = 0;
class CodeDump extends React.Component {

	code:any;
	state:Object;

	constructor(props){
		super(props);
		this.state = {code:this.props.code}


		window.code = this;
		project.references.code = this;
	}

	render(){
		//var val = this.state.code;
		//var createMarkup = ()=> { return {__html: val}; };
		return (<textarea id="codearea" className="code"
          	ref="searchStringInput"
			onFocus={((evt)=>{
				if (this.name!=="steve")
				document.getElementById('codearea').focus();
				document.getElementById('codearea').select();
			}).bind(this)}
			onBlur={((evt)=>{
				this.props.updateProject(evt);
			}).bind(this)}
			onChange={((evt)=>{
				this.props.updateProject(evt);
			}).bind(this)}
			value={this.props.code} ></textarea>);

	}

}
