/* @flow */

import React from 'react';

import ReactWinJS from 'react-winjs';

import Home_Item from './Home_Item';

import project from '../project';

export default class Item_Project extends Home_Item {

	constructor(props:Object) {

		super(props);
		this.state = {project:this.props.project};

	}

	render(){

		let title = "No Project"
		let body = "";
		let preview = "";
		let code = "";

		if (this.state.project.title) {
			body = this.state.project.title;
			title = "";
		}

		let display = (

			<Home_Item
				preview={preview}
				body={body}
				code={code}
				id="homeItemRightTile">

				<br/>

				<center className="faded">

					<h1 className="win-h1">{title}</h1>

				</center>

			</Home_Item>

		);


		return (

			<div hidden>{display}</div>

		);
		/*
		return (

			<Home_Item
			preview=""
			body={project.name}
			code=""
			id="homeItemRightTile">

				{project.name}
				{project.origin}
				{project.build}
				<br/>
				<br/>
				{project.date}

			</Home_Item>

		);
*/
	}

}
