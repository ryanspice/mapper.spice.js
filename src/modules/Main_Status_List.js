/* @flow */

import React from 'react';
import ReactWinJS from 'react-winjs';

export default class Main_Status_List extends React.Component {

	state:{

		search:string;

	}

	constructor(props:Object){


		super(props);
		this.state = {search:this.props.search, hide:1};

		this.timeout = setTimeout(()=>{},0);

	}


	render(){

		let list =  [];

		let i = 0;
		this.props.search.forEach((elm)=>{

			list.push(<div className="spice-search-term term" key={i++}> {elm.name} </div>);

		});

		if (this.props.search.length>0){

			clearTimeout(this.timeout);

			this.timeout = setTimeout(()=>{

				this.props.updateSearch([]);

			},2100);
		}

		return (

			<div id="Main_Status_List" hidden={!this.props.search.length&&this.state.hide>0} >

				{list}

			</div>

		);

	}

}
//<textarea onBlur={this.handleBlur} hidden='true' ref="index" value={JSON.stringify(this.props.search)}>  </textarea>
