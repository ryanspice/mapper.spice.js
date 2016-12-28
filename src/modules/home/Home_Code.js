

import React from 'react';

import ReactWinJS from 'react-winjs';

import Item_News from './Item_News';

import Item_Project from './Item_Project';

import Item_Code from './Item_Code';

import Home_Item from './Home_Item';

import project from '../project';

import utils from '../project';



export default class Home_Code extends React.Component {

	constructor(props) {

		super(props);

		this.state = {project:this.props.project,code:this.props.project.code};

		project.references.welcome = this;

	}



	render(){

		return (<div id="HomeCode" style={{opacity:1}} >

			<h2  id="HomeCodeTitle" className="win-h2" style={{marginTop:'1rem',display:'block',opacity:1}}>Recent Project</h2>

			<ol id="HomeGettingStarted">

				<Item_Project hidden style={{display:'none'}} project={this.state.project} />

				<Item_Code id = "code0"  project={this.state.project} code={this.state.project.code} ref="code"
					updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)}
				>a</Item_Code>

				<a href="#">
					<Home_Item
						style={{fontWeight:'bold'}}
						preview=""
						body="Test Run your Project! "
					/>

				</a>

			</ol>

		</div>);

	}

}
