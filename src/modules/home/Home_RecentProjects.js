
import React from 'react';
import ReactWinJS from 'react-winjs';

import Projects_ListView from "../projects/Projects_List.js";

export default class Home_RecentProjects extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			project:this.props.project,
			initalized:true
		};


	}


	render(){

		return (<div  id="HomeRecentProjects">

			<h1 style={{opacity:1}} id="RecentProjectsTitle" className="win-h1">Projects</h1>

			<p className="win-p">

				The data in this list is pulled from <em>Cookies</em>, see <a href="#settings"
					onClick={((evt)=>{this.props.updateState(9);}).bind(this)} >settings</a> to swtich from Local Storage to Cookies. Remember to <a href="#">backup</a> your local files inorder to ensure you data doesn't get erased.

			</p>

			<div id="ProjectsList0"></div>


		   <Projects_ListView
		   			project={this.state.project}
				   updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)} />

		</div>);

	}

}
