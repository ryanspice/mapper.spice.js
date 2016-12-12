/* @flow */

import React from 'react';
import ReactWinJS from 'react-winjs';

type ElementRef = any;

export default class Main_Status_List extends React.Component {

	state:{

		search:string;

	}

	constructor(props:Object){


		super(props);
		this.state = {search:this.props.search, hide:1};

		this.handleClick = this.handleClick.bind(this);

		this.timeout = setTimeout(()=>{},0);

	}

	componentDidMount(){

		//document.getElementById('Main_Status_List_Input').

	}

	handleSearchCommand(elm:ElementRef){

		let commandFunction;
 		let commandElement = elm;
		console.log(typeof elm == 'object')
		switch(typeof elm){

			case 'object':

				commandFunction = (nav:Function)=>{

					console.log("COMAND",elm);
					nav(commandElement,23232);

				};

			break;

			default:

				commandFunction=()=>{};

			break;

		}

		return commandFunction;

	}

	handleClick(evt:Event,elm:ElementRef){

		let command = this.handleSearchCommand(elm);

		this.props.updateSearch([],command);

	}


	render(){

		let list =  [];

		let i = 0;
		this.props.search.forEach((elm)=>{

			list.push(

				<div className="spice-search-container">
				<a onClick={(evt)=>{
					this.handleClick(evt,elm);
				}} 	className="spice-search-term term" key={i++}> {elm.name} </a>
				</div>
			);

		});

		if (this.props.search.length>0){

			clearTimeout(this.timeout);

			this.timeout = setTimeout(()=>{

				//this.props.updateSearch([]);

			},2100);
		}

		return (

			<div id="Main_Status_List" hidden={!this.props.search.length&&this.state.hide>0} >

				{list}

				<input id="Main_Status_List_Input" hidden={true} onBlur = {((evt)=>{this.props.updateSearch([],null);}).bind(this)} />

			</div>

		);

	}

}
//<textarea onBlur={this.handleBlur} hidden='true' ref="index" value={JSON.stringify(this.props.search)}>  </textarea>
