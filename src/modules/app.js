/* @flow */

import React from 'react';

import ReactDOM from 'react-dom';

import ReactWinJS from 'react-winjs';

import TopBarA from "./topbarA.js";

import Dialogue_SettingsMessage from "./Dialogue_SettingsMessage.js";

import Main_Status from './Main_Status';

import SideBarA from './Main_SideBar';

import utils from "./utils.js";

declare var WinJS: Object;

declare var hljs: Object;





export default class App extends React.Component {

	updateList:Function;
	utils:utils;

	state:{
		iterator:number;
		project:Object;
	}

	constructor(props){

		super(props);

		this.updateList = this.updateList.bind(this);

		this.utils = new utils();

		window.App = this;
		this.state = {
			iterator:this.props.iterator,
			project:project
		};

	}

	getProject():Object {

		let _project_ = this.state.project.properties;

		return _project_;

	}


	updateList(){

					function readBlob(file) {

				       var start =0;
				       var stop = file.size - 1;

				       var reader = new FileReader();

							// If we use onloadend, we need to check the readyState.
							reader.onloadend = function(evt) {

								if (evt.target.readyState == FileReader.DONE) { // DONE == 2

									console.log("LOADED FILE" + evt.currentTarget.result)

									_PROJECT_.list.unshift	(JSON.parse(evt.currentTarget.result));
									window.Projects_ListView.updateView();
									document.querySelector('#HomePivot > div.win-pivot-header-area > div.win-pivot-header-items > div > button:nth-child(2)').click();

								}

							};

							var blob = file.slice(start, stop + 1);

							reader.readAsBinaryString(blob);

				     }

					function handleFileSelect(evt) {

						//evt.stopPropagation();
						evt.preventDefault();


						if (evt.dataTransfer)
						var files = evt.dataTransfer.files;
						else
						var files = evt.target.files;

						readBlob(files[0]);
										console.log("loading FILE")

					}

					function handleDragOver(evt) {

						//evt.stopPropagation();
						evt.preventDefault();
						evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.

					}

		setTimeout(function(){
			return;
			document.getElementById('ProjectsList0').appendChild(document.getElementById('ProjectListView'));


			document.getElementById('AddProject').removeEventListener('dragover', handleDragOver, false);
			document.getElementById('AddProject').removeEventListener('drop', handleFileSelect, false);

			document.getElementById('AddProject').addEventListener('dragover', handleDragOver, false);
			document.getElementById('AddProject').addEventListener('drop', handleFileSelect, false);

				document.getElementById('files').removeEventListener('change', handleFileSelect, false);
				document.getElementById('files').addEventListener('change', handleFileSelect, false);


				var elm = document.getElementsByClassName('ProjectListItem');
				for(var i = elm.length-1;i>=0;i--){

					elm[i].removeEventListener('click',false,false);
					elm[i].addEventListener('click',function(){
						document.querySelector('#HomePivot > div.win-pivot-header-area > div.win-pivot-header-items > div > button:nth-child(2)').click();
					}, false);

				}



		},350)



	}

	componentDidMount() {

		utils.readSaveData((val:Object)=>{

			this.setState({project:val});

			window.removeEventListener('popstate',null,true);

			window.addEventListener('popstate', ((event)=> {

				console.log(event)
				console.log(event.state)
				if (event.state)
					this.refs.sba.setState({split:event.state.target});

			}).bind(this));

			setTimeout((evt)=>{
				return;
				let a:Element;
				if (a = document.getElementById('codearea')){

					a.removeEventListener('blur',true);

					a.addEventListener('blur', (evt)=>{

						let _project_ = project;
						console.log(evt);
						let _value_ = evt.target.innerText;

						if (/^[\],:{}\s]*$/.test(_value_.replace(/\\["\\\/bfnrtu]/g, '@').
						replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
						replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

  							_project_.code = _value_;

							this.setState({project:_project_});


						}else{

						  console.warn("WARNING PROJECT IS FALTY PLEASE RELOAD OR REVERT",_value_)

						}

					},false);

					a.removeEventListener('input',true);


					a.addEventListener('input', (evt)=>{

					},false);

					a.removeEventListener('focus',true);

					a.addEventListener('focus', (evt)=>{
						//window.CC = 0;
					},false);


			 }
		 },0);


		 /**/

		});

		this.updateList();



	}

	updateState(state){

  	  	this.refs.sba.setState({ split: state, paneOpened: false });

		if (this.refs.sba.split!=undefined)
	    	history.pushState({"State": "settings","target":""+this.refs.sba.split,"uid":""+new Date().getTime()}, "1", "/index.htm");
		else
	    	history.pushState({"State": "settings","target":"1010","uid":""+new Date().getTime()}, "1", "/index.htm");

	}

	updateProject(evt){

		let _project_ = this.state.project;
		let _value_ = evt.target.value;

		if (/^[\],:{}\s]*$/.test(_value_.replace(/\\["\\\/bfnrtu]/g, '@').
		replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
		replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

			let _temp_ = JSON.parse(_value_);
			let _temp2_ = JSON.parse(`{
			    "title": "Project Name",
			    "author": {
			        "company": "Company Name",
			        "city": "",
			        "state/province": ""
			    },
			    "references": {},
			    "data": {
			        "size": "2",
			        "objects": "5",
			        "backgrounds": "0",
			        "sprites": "4",
			        "animations": "0"
			    },
			    "mapdata": []
			}`);

			_temp2_ = Object.assign(_temp2_,_temp_);
			//_temp2_.draw = "document.getElementsByClassName('code')[1].value";
			let _pretty_ = JSON.stringify(_temp2_, undefined, 4);

			_project_.code = _pretty_;
			_project_.current = 0;
			_project_.list[_project_.current] = (JSON.parse(_pretty_));

			this.setState({project:_project_});
			 utils.Cookies.set('mapper',_pretty_);
			 window.Projects_ListView.updateView();

 		}else{

			this.setState({project:_project_});
 			console.warn("WARNING PROJECT IS FALTY PLEASE RELOAD OR REVERT",_value_)

 		}

	}

	render(){

		return (

		<main>

			<TopBarA ref="topbar" />

			<SideBarA ref="sba" project = {this.state.project}
				updateProject={((evt)=>{this.updateProject(evt);}).bind(this)}
				updateState={((evt)=>{this.updateState(evt);}).bind(this)}
				/>

			<Dialogue_SettingsMessage />

			<Main_Status id="main_status" />


		</main>);
		}

}
