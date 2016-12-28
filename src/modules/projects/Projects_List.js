/* @flow */

import React from 'react';

var ReactWinJS = require('react-winjs');

import WinJS from 'winjs';

import List_Item from './Projects_List_Item';

import project from '../project';



export default class Projects_ListView extends React.Component {

	constructor(props:Object){

		updateView:Function;

		state:{
			project:Object;
			data:typeof new WinJS.Binding.List(project.list);
		}

		super(props);

		this.state = {
			project:this.props.project,
			data:new WinJS.Binding.List(this.props.project.list)
		};

		this.updateView = this.updateView.bind(this);

		window.Projects_ListView = this;

	}

	updateView(){
		console.log(this.state.project.list);
		this.setState({
			data:new WinJS.Binding.List(this.state.project.list)
		});

		setTimeout(window.App.updateList,300);

	}

	render(){

		let listViewItemRenderer = ReactWinJS.reactRenderer((item)=>{
			return <List_Item obj={item} f={()=>{this.props.updateState(2); document.getElementById('element__5').click(); }}/>;
		});


		return (<ReactWinJS.ListView
			id="ProjectListView"
			style={{width:'100%',maxWidth:'450px',margin:'0px auto', height:'586px'}}
				updateState={((evt)=>{this.props.updateState(evt);}).bind(this)}
			itemDataSource={this.state.data.dataSource}
			itemTemplate={listViewItemRenderer}
			layout={{ type: WinJS.UI.ListLayout }} />);


	}

}
