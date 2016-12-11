
import React from 'react';
import ReactWinJS from 'react-winjs';


var listIterator = 0;
var HomePivotCount = 0;


//import Home_News from './home/Home_News';

import Home_PivotItem from './home/Home_PivotItem';



import Home_References from './home/Home_References';
import Home_RecentProjects from './home/Home_RecentProjects';
import Home_Code from './home/Home_Code';
import Home_Code_Draw from './home/Home_Code_Draw';


  export default class SplitViewHome extends React.Component {
	  constructor(props) {

		super(props);

		this.state=({
			project:this.props.project,
			pivot:{
				home:"<a></a>"

			}
		});

		window.SplitViewHome = this;

	}

  	render(){

		return (

			<div id="kk">

                <div style={{width:'100%',height:'55px',clear:'both',display:'block'}}>

	                <h1 className="win-h1" style={{background:'rgba(25,25,25,0.25)',display:'',float:'left',maxWidth:'100px',marginLeft:'0.75em'}}>Home</h1>

                </div>

				<Home_RecentProjects style={{opacity:0}} project={this.state.project}
					updateState={((evt)=>{this.props.updateState(evt);}).bind(this)}
					updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)} />

				<Home_Code style={{opacity:0}} project={this.state.project}
					updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)} />



			</div>

			);

  	}

  }
// <Home_References style={{opacity:0}} />
/*

				<Home_Code_Draw style={{opacity:0}} project={this.state.project}
					updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)} />
                    */
