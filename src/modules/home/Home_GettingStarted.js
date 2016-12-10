

import React from 'react';

import ReactWinJS from 'react-winjs';

import Item_News from './Item_News';

import Item_Project from './Item_Project';

import Item_Code from './Item_Code';

import Home_Item from './Home_Item';

import project from '../project';

import utils from '../project';

export default class Home_GettingStarted extends ReactWinJS.Pivot.Item {

	constructor(props) {

		super(props);

		this.state = {project:this.props.project,code:this.props.project.code};

		window.home = this;

		project.references.gettingstarted = this;

	}

render(){

let HomeTutorialCode = [];
HomeTutorialCode[3] =	`
	<img src="" style="width:25px;height:25px;border:1px solid black;"/>
	<h4>Title of a News Article 2016 Trumpocapalypse</h4>
	<h5>2010/10/10</h5>
`;
return (
	<div >

	<h2 hidden id="HomeWelcomeTitle" className="win-h2" style={{display:'none',opacity:0}}>Getting Started</h2>

	<ol id="HomeGettingStarted">

		<Item_Project hidden style={{display:'none'}} project={this.state.project} />

		<Item_Code id = "code0"  project={this.state.project}  ref="code"	  >a</Item_Code>




		<a href="#">
		<Home_Item
		style={{fontWeight:'bold'}}
		preview=""
		body="Test Run your Project! "
		/>

		</a>

	</ol>

	</div>

);

}


}
