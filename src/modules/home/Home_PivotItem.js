

var React = require('react');
var ReactWinJS = require('react-winjs');

import Home_References from './Home_References';


import Home_RecentProjects from './Home_RecentProjects';
import Home_Code from './Home_Code';

export default class Home_PivotItem extends ReactWinJS.Pivot.Item {

	constructor(props) {

		super(props);
		this.state={project:this.props.project};
						console.log(this.props.project)
						window.homePivot = this;
	}

	componentWillReceiveProps(){


				console.log('CHANGE2');
	}


	render (){

		return (
			<div ref="home">

				<div id="HomeMain">

					<Home_RecentProjects project={this.state.project} />

					<Home_Code project={this.state.project}  />


					<div style={{display:'none', height:'245px',float:'left',background:"white",border:"1px solid black",width:"99%"}}>	</div>
					<div style={{display:'none', height:'45px',float:'left',background:"white",border:"1px solid black",width:"99%"}}>	</div>

				</div>




			</div>

		);

	}


}
