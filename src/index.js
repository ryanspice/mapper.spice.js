/* @flow */

import React from 'react';

import ReactDOM from 'react-dom';

import App from "./modules/app.js";

import SpiceJS from "./sjs/spice.js";

import LoadingScreen from "./loading.js";

import project from "./modules/project.js";

/*
	@ Mapper built as a customizable JSON map editor for 2D Games.
	@ Ryan Spice-Finnie
*/

((SpiceJS.create()).OnLoad =  (self:Object)=>{

	let width:number = 1224;
	let height:number = 720;
	let anchor = document.getElementById("app");

	self.main = LoadingScreen;// {update:function(){},draw:function(){this.visuals.circle(0,0,2.5,"#FFFFFF");},init:function(){}};

	window._App = self;
	window.Application = this;

	ReactDOM.render(
		<App project={project} />,
		anchor
	);

});
