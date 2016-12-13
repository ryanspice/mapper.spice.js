/* @flow */

import React from 'react';
import ReactWinJS from 'react-winjs';

import SplitViewSettings from "./SplitView_Settings.js";

import SplitViewHome from "./SplitView_Home.js";
import SplitView_Preview from "./SplitView_Preview.js";
import Sidebar_Pivot_Objects from "./Sidebar_Pivot_Objects.js";
import SplitView_Map from "./SplitView_Map.js";
import SplitView_Web from "./SplitView_Web.js";

import Base from "./splitview/base.js";
import Group from "./splitview/group";

import Home_Code_Draw from './home/Home_Code_Draw';

import project from "./project.js";
import utils from "./utils.js";

declare var WinJS: Object;
declare var hljs: Object;

var splitViewId = "mySplitView";

var _PROJECT_ = window._PROJECT_ = {
list:[null]
}


const _LISTLAYOUT_ = { type: WinJS.UI.ListLayout };

class SplitViewStartingScreen extends React.Component {

	render(){

	return (<div style={{position:'relative',top:'5.67rem', left:'0.67rem'}}>
		<h1 style={{opacity:0.5, width:"100%", textAlign:'center'}}>Loading...</h1>
		</div> );

	}

}
var SCROLLY = 0;
window.CC = 2;
window.TT = 0;


export default class SideBarA extends React.Component {

	tick:Function;
	handleOpenPane:Function;
	handleOpenPane:Function;
	handleGoToHome:Function;
	handleGoToSettings:Function;
	handleSplitViewContent:Function;
	handleGoMap:Function;
	handleGoWeb:Function;
	handleObjectListMore:Function;
	handleObjectListMore2:Function;
	handleScroll:Function;
	handleGoToPreview:Function;
	listViewItemRenderer:Object;
	SplitViewContentComponent:Object;
	_OBJECTLIST_:Object;
	project:Object;

	state: {

		count:number;
		paneOpened:boolean;
		split:number;
		current:number;
		SplitViewContentComponent:Object;
		project:Object;
		_OBJECTLIST_:Object;
		currentlyOpened:Array<Object>;
		currentlyOpen:number;
	}

	props:{
		_OBJECTLIST_:[],
		initialCount: 0,
		initalOpened:false

	}



	static properties:{
		tick:void
	}

  constructor(props:Object ) {

	  super(props);

		this.state = {count: props.initialCount,paneOpened:props.initalOpened,
		project:props.project,
		current:1,
		split:1010,
		initialCount: 0,
		initalOpened:false,
		currentlyOpened:[],
		currentlyOpen:0,
		SplitViewContentComponent:(<SplitViewStartingScreen />),
		_OBJECTLIST_:new WinJS.Binding.List([
	    	{ title:'A' },
	    	{ title:'C' }
	  ])
	};

    this.tick = this.tick.bind(this);
    this.handleOpenPane = this.handleOpenPane.bind(this);
    this.handleOpenPaneOnly = this.handleOpenPaneOnly.bind(this);
    this.handleGoToHome = this.handleGoToHome.bind(this);
    this.handleGoToSettings = this.handleGoToSettings.bind(this);
    this.handleSplitViewContent = this.handleSplitViewContent.bind(this);
    this.handleGoMap = this.handleGoMap.bind(this);
    this.handleGoWeb = this.handleGoWeb.bind(this);
    this.handleObjectListMore = this.handleObjectListMore.bind(this);
    this.handleObjectListMore2 = this.handleObjectListMore2.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleGoToPreview = this.handleGoToPreview.bind(this);

	let i = 0;
	this.listViewItemRenderer = ReactWinJS.reactRenderer(function (item) {
		return (

			<span> Stephan{i++}  <i className="win-p">./library/starcraft/pros/stephano.jpg</i></span>
		);
	});

	var elm = document.getElementById('SplitView_Map');
	if (elm)
		elm.style.zIndex = "-10";

	window._CONTROLLER_SIDEBAR_ = this;
  }

tick():void {

	this.setState({count: this.state.count + 1});

}

	clearHighlight(a:string,b:string){

		document.getElementById('element__3').style.background = '';
		document.getElementById('element__4').style.background = '';
		document.getElementById('element__5').style.background = '';
		document.getElementById('element__6').style.background = '';

		document.getElementById(a).style.background = b;
	}


  handleGoToPreview(){

  		this.setState({ split: 1012, paneOpened: this.state.paneOpened });


		if (this.state.split!=undefined)
		if (this.state.split!=null)
			history.pushState({"State": "preview","target":""+this.state.split,"uid":""+new Date().getTime()}, "2", "/index.htm");
		else
			history.pushState({"State": "preview","target":"1010","uid":""+new Date().getTime()}, "2", "/index.htm");

		///this.clearHighlight('element__7','rgba(255,255,255,0.125)')

		return;

  }













  handleGoToHome(){

		//window.CC = 1;
		if (this.state.split!==1)
	  		this.setState({ split: 1010, paneOpened: this.state.paneOpened });

		this.clearHighlight('element__3','rgba(255,255,255,0.125)')

		return;

  }

  handleGoMap(){

	  	this.setState({ split: 2, paneOpened: this.state.paneOpened });


				this.clearHighlight('element__5','rgba(255,255,255,0.125)')
  }
  handleGoWeb(){
	  	this.setState({ split: 8, paneOpened: this.state.paneOpened });

				this.clearHighlight('element__4','rgba(255,255,255,0.125)')

  }

  handleGoToSettings(){

  	  	this.setState({ split: 9, paneOpened: false });

				this.clearHighlight('element__14','rgba(255,255,255,0.125)')

  }

  handleOpenPane(){

	 utils.switchAnimations(100);
  	this.setState({ split: this.state.split,paneOpened: !this.state.paneOpened });

  }

  handleOpenPaneOnly(){

	  console.log('eh')
	  this.state.paneOpened = true;
	  this.setState({ split: this.state.split,paneOpened: true });

  }

  handleClosePane(){

  	this.setState({ split: this.state.split, paneOpened: false });

  }


	handleSplitViewContent() {

		var elm = document.getElementById('SplitView_Map');
		if (elm)
		  elm.style.zIndex = "-10";

		WinJS.UI.Animation.exitPage(elm).done(function(a){

			  //elm.style.zIndex = "-10";
		})

		switch (this.state.split) {

  		  case 1:

  		  this.state.SplitViewContentComponent = ( <SplitViewHome ref="splitviewhome"

			  updateState={((evt)=>{this.props.updateState(evt);}).bind(this)}
			  updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)}
			  project={this.state.project} /> );

  			this.animateContent();
  		  break;

  		  case 2:

  		  //this.state.SplitViewContentComponent = ( <SplitView_Map /> );
		this.state.SplitViewContentComponent = ( 				<h2 className="win-h2 hover" style={{display:'none',marginLeft:'112px',width:'50%'}} onClick={()=>{

			this.setState({current:-1});

		}}>mapper.json</h2>
		);
				var elm = document.getElementById('SplitView_Map');
				if (elm)
		  elm.style.display='block',WinJS.UI.Animation.enterPage(document.getElementById('SplitView_Map')).done(function(a){

  			  elm.style.zIndex = "10";
  		});

  		  break;

  		  case 8:

	  		this.state.SplitViewContentComponent = ( <SplitView_Web header="Google Closure Compiler" src="http://closure-compiler.appspot.com/home" /> );

  		  break;

  		  case 9:

	  		this.state.SplitViewContentComponent = ( <SplitViewSettings /> );

  		  break;

  		  case 1010:

		  this.state.SplitViewContentComponent = ( <SplitViewStartingScreen /> );

  		  break;

  		  case 23232:

		 	let details = this.state.currentlyOpened[this.state.currentlyOpen-1];

			if (details.name)
  				this.state.SplitViewContentComponent = ( <Group project={this.state.project} details={details} /> );
				else
  			this.state.SplitViewContentComponent = ( <Base project={this.state.project} details={details} /> );

  		  break;

  		  case 1012:

  		  this.state.SplitViewContentComponent = ( <SplitView_Preview
			  updateState={((evt)=>{this.props.updateState(evt);}).bind(this)}
			  updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)}
			  project={this.state.project} /> );

  		  break;


  	  }


	}

	updateDimensions(){


		document.getElementById('OPENTABSBAR').style.height = (window.innerHeight-48*6) + "px";

	}

	componentDidMount(){

        window.addEventListener("resize", this.updateDimensions.bind(this));
		//elm.addEventListener('click',this.handleObjectListMore2,false);
		console.log('eh');
		this.animateContent();



	}
	componentWillUnmount(){

        window.removeEventListener("resize", this.updateDimensions.bind(this));


	}

	componentDidUpdate (){

		if (this.state.split == 1010) {
				this.setState({ split: 1, paneOpened: this.state.paneOpened });
				window.CC = 0;
		}

		return;
	}

	animateContent(){




	}


	handleScroll(event:Object) {

			/*
		    let scrollTop = event.srcElement.body;

			let ref = this.refs['list'];
			var val = Math.round(event.target.scrollTop/100*15);
			ref.winControl.ensureVisible = val;
		*/
	}

	handleObjectListMore() {

		//var elm = document.querySelector('#ObjectListToolbar > div > div.win-commandingsurface-content > div.win-commandingsurface-actionareacontainer > div.win-commandingsurface-actionarea.win-toolbar-actionarea > button.win-commandingsurface-overflowbutton.win-toolbar-overflowbutton')[0];
		//console.log(elm);

	}

	handleObjectListMore2(e:Object) {

		//console.log(e);
		//elm.querySelector()
		//e.stopPropagation();
		//e.preventDefault();

	}

	handlePaneClosed(e){

				this.setState({ paneOpened: false });
	}

  render() {

	  this.handleSplitViewContent();

	  let currentData = this.state._OBJECTLIST_.dataSource;

	  let currentLayout = this.listViewItemRenderer;
	  let ObjectListHeight = "320px";

  	  let max = 1;
	  let height = 20;

	  let elm = document.getElementsByClassName('.win-itemscontainer')[0];
	  elm = (currentData._list._currentKey*height)+"vh";

	  if (currentData._list._currentKey<max)
	  ObjectListHeight = (currentData._list._currentKey*height)+"vh";
	  else
	  ObjectListHeight = (max*height)+"vh";

	  if (window.innerHeight<715)
	  	ObjectListHeight = "0px";




	var content = (this.state.SplitViewContentComponent);


	var currentlyopen = [];


	let spacer = (<ReactWinJS.SplitView.Command
								style={{opacity:0}}
								className="fourtyeight"
								label="help"
								icon="help"
								key={currentlyopen.length}
								onInvoked={()=>{

								}} />);

	currentlyopen.push(spacer);

	let iterator = 0;
	for(let i = 0; i<this.state.currentlyOpened.length;i++){

		iterator++;
		currentlyopen.push((

					<ReactWinJS.Tooltip
							key={"TT"+i}
						contentComponent={<div>Object {i}</div>}>

		<ReactWinJS.SplitView.Command
						className={"Object"+i}
						label={"Object"+i}
						icon="help"
						key={"a"+i}
						onInvoked={()=>{
							console.log(iterator)
								  	this.setState({ split: 23232,  currentlyOpen:(i+1), currentlyOpened:this.state.currentlyOpened,paneOpened: false });
						}} />

								</ReactWinJS.Tooltip>
				));

	}



	  var pane = (
	    <div>
			<ReactWinJS.SplitViewPaneToggle
				label="Mapper"
				data-win-options="{ openedDisplayMode : 'overlay'}"
				aria-controls={splitViewId}
				paneOpened={this.state.paneOpened}
				onInvoked={this.handleOpenPane}
			/>

			<ReactWinJS.SplitView.Command
				label="Home"
				icon="home"
				onInvoked={this.handleGoToHome} />

			<ReactWinJS.SplitView.Command
				style={{display:"none"}}
				label="Web"
				icon="globe"
				onInvoked={this.handleGoWeb} />

			<ReactWinJS.SplitView.Command
				label="Map"
				icon="map"
				onInvoked={this.handleGoMap} />


			<ReactWinJS.SplitView.Command
				label=""
				icon="showbcc"
				onInvoked={this.handleOpenPane} />





				<ReactWinJS.SplitView.Command

					id="SidebarMainBackgroundListTitle"
					style={{display:'none',position:'relative',left:'48px', top:'-48px', zIndex:'2', width:'156px'}}
					label="Backgrounds"
					icon="otheruser"
					onInvoked={this.handleObjectListMore} />


									<Home_Code_Draw  project={this.state.project}
										updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)} />




			<ReactWinJS.Tooltip contentComponent={<div>Preview the game in the browser...</div>}>

				<ReactWinJS.SplitView.Command
					label="Preview"
					icon="play"
					onInvoked={this.handleGoToPreview} />

			</ReactWinJS.Tooltip>

			<ReactWinJS.Tooltip
				contentComponent={<div>Mapper settings...</div>}>

				<ReactWinJS.SplitView.Command
					label="Settings"
					icon="settings"
					onInvoked={this.handleGoToSettings} />

			</ReactWinJS.Tooltip>

			<div id="OPENTABSBAR" style={{height:(window.innerHeight-48*6) + "px",overflowY:'auto'}}>
			{currentlyopen}
		</div>




		</div>
	);

    return (
		<div>

			<ReactWinJS.SplitView
			ref="splitview"
			id={splitViewId}
			paneComponent={pane}
			openedDisplayMode = {"overlay"}
			contentComponent={content}
			paneOpened={this.state.paneOpened}
			onAfterClose={this.handlePaneClosed.bind(this)}

			 />

			<SplitView_Map />

		</div>
    );
  }
}


/*

			<ReactWinJS.Pivot style={{display:'none',position:'relative',top:"-54px",left:"48px",zIndex:"25555", height: "100px",maxHeight:"100px",display:this.state.paneOpened?"block":"none" }} >

				<ReactWinJS.Pivot.Item key="itemA" header="Object">
					<Sidebar_Pivot_Objects
						itemDataSource={currentData}
						itemTemplate={currentLayout}
						layout={_LISTLAYOUT_}
						style={{ maxHeight:ObjectListHeight }}
					/>
				</ReactWinJS.Pivot.Item>





				<ReactWinJS.Pivot.Item key="itemB" header="Sprite">

					<div>
						<ReactWinJS.ToolBar
							style={{display:this.state.paneOpened?"block":"none" }}
							onBeforeClose={this.state.paneOpened?this.handleOpenPane:null}
							id="BackgroundListToolbar"
						>

							<ReactWinJS.ToolBar.Button key="import" label="This is a ToolBar command" icon="import"
								onInvoked={this.handleObjectListMore2}
							/>
							<ReactWinJS.ToolBar.Button key="add" label="This is a ToolBar command" icon="add"
								onInvoked={this.handleObjectListMore2}
							/>

						</ReactWinJS.ToolBar>


						<ReactWinJS.SplitView.Command

							id="SidebarMainBackgroundListTitle"
							style={{position:'relative',left:'48px', top:'-48px', zIndex:'2', width:'156px'}}
							label="Backgrounds"
							icon="otheruser"
							onInvoked={this.handleObjectListMore} />


						<ReactWinJS.ListView
							id="SidebarMainObjectList"
							itemDataSource={currentData}
							itemTemplate={currentLayout}
							loadingBehavior="incremental"
							automaticallyLoadPages={true}
							layout={_LISTLAYOUT_}
							style={{opacity:this.state.paneOpened?"1":"0", maxHeight:ObjectListHeight }}
						/>
					</div>
				</ReactWinJS.Pivot.Item>





				<ReactWinJS.Pivot.Item key="itemC" header="Tiles">

				</ReactWinJS.Pivot.Item>









				<ReactWinJS.Pivot.Item key="itemD" header="Rooms">

					<Home_Code_Draw  project={this.state.project}
						updateProject={((evt)=>{this.props.updateProject(evt);}).bind(this)} />

				</ReactWinJS.Pivot.Item>







			</ReactWinJS.Pivot>



*/
