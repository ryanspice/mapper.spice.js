/* @flow */

import React from 'react';

import ReactWinJS from 'react-winjs';

import Base from './base';

export default class Group extends Base {


	constructor(props:Object) {

		super(props);

	}

	render(){

		let temp = ()=>{return (<div style={{padding:'5px',float:'left',width:'15vw',height:'15vw',background:'rgba(25,25,25,0.25)',position:'relative',left:'1vw',margin:'0.5rem'}}></div>);};

		let list = [];
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());
		list.push(temp());

		let data:any = JSON.parse(this.props.project.code).data;

		console.log(data)

		try{
		if (( data[this.props.details.name][0]))
			data = {
				name:this.props.details.name,
				data:data[this.props.details.name]
			};
		}catch(e){

			console.warn(e);

		}

		return (

			<div id="kks">

		        <div style={{width:'100%',height:'55px',clear:'both',display:'block'}}>

		            <h1 className="win-h1" style={{position:'fixed',marginLeft:'0.75rem',paddingBottom:'0.75rem'}}>{this.props.details.name}</h1>


					{list}


		            <a className="xxx" style={{position:'fixed',right:'0px',top:'0px',float:'right', padding:'1.5rem'}} > </a>

		        </div>

				<p>
		        {this.props.details.name}
				<br/>
				{data[this.props.details.name]}
				</p>
			</div>

		);

	}

}
