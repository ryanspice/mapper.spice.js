/* @flow */

import React from 'react';

import ReactWinJS from 'react-winjs';

import project from './project';

export default class Sidebar_Pivot_Objects extends React.Component {

	constructor(props){

		super(props	);


	}

	render(){

		return (
		<div>
			<h1 className="win-h1"> Objects</h1>
			<ReactWinJS.ToolBar
			id="ObjectListToolbar">

				<ReactWinJS.ToolBar.Button key="import" label="This is a ToolBar command" icon="import"	/>
				<ReactWinJS.ToolBar.Button key="add" label="This is a ToolBar command" icon="add"/>

			</ReactWinJS.ToolBar>


			<ReactWinJS.SplitView.Command
			style={{position:'relative',left:'48px0', top:'-48px', zIndex:'2', width:'116px'}}
			label="Objects"
			icon="contactpresence"
			id="SidebarMainObjectListTitle"  />


			<ReactWinJS.ListView
			id="SidebarMainObjectList"
			itemDataSource={this.props.itemDataSource}
			itemTemplate={this.props.itemTemplate}
			loadingBehavior="incremental"
			automaticallyLoadPages={true}
			layout={this.props.layout}
			style={this.props.style}
			/>
		</div>);

	}

}
