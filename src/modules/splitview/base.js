/* @flow */

import React from 'react';

import ReactWinJS from 'react-winjs';

  export default class Base extends React.Component {

      state:{

          project:Object;
          details:Object;

      }


	  constructor(props:Object) {

		super(props);

		this.state=({
			project:this.props.project,
			details:this.props.details
		});

	}

  	render(){

        console.log(this.state.details);

		return (

			<div id="kks">

                <div style={{width:'100%',height:'55px',clear:'both',display:'block'}}>

	                <h1 className="win-h1" style={{background:'rgba(25,25,25,0.25)',display:'',float:'left',maxWidth:'100px',marginLeft:'0.75em'}}>{this.props.details.type}</h1>

                    <a className="xxx" style={{float:'right', padding:'1.5rem'}} > </a>

                </div>
                {this.props.details.name}

			</div>

			);

  	}

  }
// <Home_References style={{opacity:0}} />
/*

				<Home_Code_Draw style={{opacity:0}} project={this.state.project}
					updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)} />
                    */
