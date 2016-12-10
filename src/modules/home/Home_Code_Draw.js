
/* Here is a Comment */

import React from 'react';

import ReactWinJS from 'react-winjs';

import Item_News from './Item_News';

import Item_Project from './Item_Project';

import Item_Code from './Item_Code';

import Home_Item from './Home_Item';

import project from '../project';

import utils from '../project';
var list = [
	{"name":"main", "draw":"","update":"","init":""},
	{"name":"intro", "draw":"","update":"","init":""},
	{"name":"loading", "draw":"","update":"","init":""},
	{"name":"game", "draw":"","update":"","init":""},

]


export default class Home_Code_Draw extends React.Component {

	constructor(props:Object){

		list = [
			{
				"name":"open",
				"icon":"map"
			},
			{
				"name":"rooms",
				"icon":"map"
			},
			{
				"name":"objects",
				"icon":"copy"
			},
			{
				"name":"sprites",
				"icon":"copy"
			},
			{
				"name":"tiles",
				"icon":"copy"
			}
		];

		updateView:Function;

		state:{
			project:Object;
			data:typeof list;
		}

		super(props);


		this.state = {
			project:this.props.project,
			data:list
		};


	}


	handleNew(src){

		console.log(src);

	}

	handleNews(){}

	action(button) {

		let data = button.children[1].innerText;
		let obj = {};
		let evt;
		let code;

		//Attempt to parse data (should be fine akways)

		try{
			console.log(data);
			obj = JSON.parse(data);
			code = JSON.parse(this.state.project.code);

		}catch(e){

			console.warn("Failed to "+data);
			obj = {};
			code = {};

		}

		//Store fake evt

		evt = {
				target:button
		};

		//Decide action

		let LIST = code.data['states'];
		if (obj.type=="rooms") {
			LIST = code.data['states'];
		}
		if (obj.type=="tiles") {
			LIST = code.data['tiles'];
		}
		if (obj.type=="sprites") {
			LIST = code.data['sprites'];
		}
		if (obj.type=="objects") {
			LIST = code.data['objects'];
		}

		switch(obj.command){

			case 'add':

				LIST.push({

					name:obj.type+LIST.length

				});

			break;

			case 'remove':

			console.log(obj)
			LIST = code.data['states'];
				for(var i = 0; i<LIST.length;i++){
					if (obj.type==LIST[i].name){
						LIST.splice(i,1);
					}
				}

			LIST = code.data['tiles'];
				for(var i = 0; i<LIST.length;i++){
					if (obj.type==LIST[i].name){
						LIST.splice(i,1);
					}
				}

			LIST = code.data['sprites'];
				for(var i = 0; i<LIST.length;i++){
					if (obj.type==LIST[i].name){
						LIST.splice(i,1);
					}
				}

			LIST = code.data['objects'];
				for(var i = 0; i<LIST.length;i++){
					if (obj.type==LIST[i].name){
						LIST.splice(i,1);
					}
				}

			break;

		}

		//Finalize Change

		evt.target.value = JSON.stringify(code);

		this.props.updateProject(evt);

	}

	/*
		Add event listeners to add objects to the map/game.
	*/

	componentDidMount(){

		setTimeout(()=>{

			//let button = document.querySelectorAll("#BackgroundListToolbar > div > div.win-commandingsurface-content > div.win-commandingsurface-actionareacontainer > div.win-commandingsurface-actionarea.win-toolbar-actionarea > button.win-disposable.win-command");

			let fun = this.action.bind(this);

			let pivot = document.getElementById('PivotA');

			pivot.removeEventListener('selectionchanged',false);

			pivot.addEventListener('selectionchanged',((evt)=>{
				setTimeout(()=>{
					setTimeout(()=>{

						if (evt.detail.item._header=="open") {

							document.getElementById('OPENTABSBAR').style.width = '';

						}else {

							document.getElementById('OPENTABSBAR').style.width = '48px';

						}





						let button2 = document.querySelectorAll("#BackgroundListToolbar > div > div.win-commandingsurface-content > div.win-commandingsurface-actionareacontainer > div.win-commandingsurface-actionarea.win-toolbar-actionarea > button.win-disposable.win-command");

						for(let i = button2.length-1; i>=0; i--){

							button2[i].onclick = ((evt)=>{

								this.action(button2[i]);

							}).bind(this);

						}

					});
							},500);

			}).bind(this),false);


		},500);

	}

	/*
		Render
	*/

	render(){

		let type = ``;

		let json = function(type,command){

			return `
					{
						"command":"${command}",
						"type":"${type}"
					}
				`;

		}

		let PivotCount = 0;



		let code = (item)=>{
			try {

				let more = [];
				let moreContentCount:number = 0;
				let moreContentData;

				let moreContent = (item,num)=> {
					moreContentCount++;

					return (
						<div style={{position:'relative',top:'-48px',height:'48px'}}
						key={item.name+":1:"+moreContentCount}>

							<ReactWinJS.SplitView.Command
								label={item.name}
								key={item.name+":2:"+moreContentCount}
								style={{position:'relative',left:'33px',top:'0px',zIndex:'1',width:'50%'}}
								id={"Command"+moreContentCount}
								icon="" />

							<ReactWinJS.ToolBar
								onBeforeClose={this.state.paneOpened?this.handleOpenPane:null}
								id="BackgroundListToolbar"  >

								<ReactWinJS.ToolBar.Button  key="delete" icon="remove"

									label={json(item.name,"remove")}
									onInvoked={()=>{}}
								/>

							</ReactWinJS.ToolBar>

							<br/>

						</div>

					);
				};

				if (item.name=="rooms") {
					let states = this.state.project.read.data.states;
					for(var i = 0; i<states.length; i++)
						more.push(moreContent(states[i],i));
				} else
				if (item.name=="objects") {
					let objects = this.state.project.read.data.objects;
					for(var i = 0; i<objects.length; i++)
						more.push(moreContent(objects[i],i));
				} else
				if (item.name=="sprites") {
					let sprites = this.state.project.read.data.sprites;
					for(var i = 0; i<sprites.length; i++)
						more.push(moreContent(sprites[i],i));
				} else
				if (item.name=="tiles") {
					let tiles = this.state.project.read.data.tiles;
					for(var i = 0; i<tiles.length; i++)
						more.push(moreContent(tiles[i],i));
				};



						setTimeout(()=>{
							setTimeout(()=>{

								let button2 = document.querySelectorAll("#BackgroundListToolbar > div > div.win-commandingsurface-content > div.win-commandingsurface-actionareacontainer > div.win-commandingsurface-actionarea.win-toolbar-actionarea > button.win-disposable.win-command");

								for(let i = button2.length-1; i>=0; i--){

									button2[i].onclick = ((evt)=>{

										this.action(button2[i]);

									}).bind(this);

								}

							});
									},500);


				/* Pivot Toolbar */
				type = "add";


				return (

					<ReactWinJS.Pivot.Item key={PivotCount++} header={item.name} style={this.props.style}>

						<div key={item.name+":1:"+PivotCount} style={{position:'relative',top:'48px',zIndex:'1'}}>

							<ReactWinJS.SplitView.Command
								style={{opacity:0}}
								label=""
								key={item.name+":0:"+PivotCount}
								icon={item.icon} />

							<ReactWinJS.ToolBar
								onBeforeClose={this.state.paneOpened?this.handleOpenPane:null}
								id="BackgroundListToolbar"
								className={item.name+"bar"}
								 >

								<ReactWinJS.ToolBar.Button key={type}
									label={json(item.name,type)}
									icon={type}
									onInvoked={()=>{ alert(); }} />

							</ReactWinJS.ToolBar>

							{more}

						</div>

					</ReactWinJS.Pivot.Item>

				);

			}catch(e){

				return (
						<ReactWinJS.Pivot.Item key={PivotCount++} header={item.name} style={this.props.style}>
							<div key={PivotCount++}>Failed</div>
						</ReactWinJS.Pivot.Item>
					);

			}
		}

		var codes = [];
		for(var i = 0; i<this.state.data.length; i++)
			codes.push(code(this.state.data[i]));

		return (
			<div id="HomeCodeDraw" style={{opacity:1}} >
				<ReactWinJS.Pivot  id="PivotA" >
				{codes}
				</ReactWinJS.Pivot>
			</div>);
	}

}
