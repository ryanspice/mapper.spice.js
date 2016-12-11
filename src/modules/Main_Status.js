/* @flow */

import React from 'react';

import ReactWinJS from 'react-winjs';

import project from "./project"

type ElementRef = any;

Array.prototype.findValue = function(name, value){
   var array = map(this, function(v,i){
		var haystack = v[name];
		var needle = new RegExp(value);
		// check for string in haystack
		// return the matched item if true, or null otherwise
	  return needle.test(haystack) ? v : null;
   });
  return array;
}

export default class Main_Status extends ReactWinJS.AppBar {

	constructor(props:Object){

		super(props);
		this.state = {project:props.project};

		this.getResults = this.getResults.bind(this);
		this.getPropertyByValue = this.getPropertyByValue.bind(this);

	}


	getCode=()=>{

		return JSON.parse(project.code);

	}

	getPropertyByValue = (object:any, value:any) => {
	  var valuePaths;
	  var visitedObjects = [];

	  function collectValuePaths(object, value, path, matchings) {

	    for (var property in object) {

	      if (
	        visitedObjects.indexOf(object) < 0 &&
	        typeof object[property] === 'object') {

	        // Down one level:

	        visitedObjects.push(
	          object);

	        path =
	          path +
	          property + ".";

	        collectValuePaths(
	          object[property],
	          value,
	          path,
	          matchings);
	      }

	      if (object[property] === value) {

	        // Matching found:

	        matchings.push(
	          path +
	          property);
	      }

	      path = "";
	    }

	    return matchings;
	  }

	  valuePaths =
	    collectValuePaths(
	      object,
	      value,
	      "",
	      []);

	   return valuePaths;
	}

	getResults = ()=>{

		let results = [];
		let query= this.refs.input.value;
		let code = this.getCode().data;

		if (query=="")
			return [];

		let depth = 0;

		let search = (obj) => {

			for(let elem in obj){

				if (elem==query) {

					results.push({"name":elem,"value":obj[elem]});

				}else{

					let close = 0;

					if (elem.indexOf(query)!=-1)
						close++;

					if (close>0){
						results.push({"name":elem,"value":obj[elem]});
					}

				}
			}

		}
		let searchArr = (arr,type) => {

			arr.forEach((elem)=>{

					if (elem==query) {

						results.push({"type":type,"name":JSON.stringify(elem)});

					}else{

						let close = 0;

						if (elem.name.indexOf(query)!=-1)
							close++;

						if (close>0){
							results.push({"type":type,"name":JSON.stringify(elem)});
						}

					}

				}
			);

		}


		search(code);
		searchArr(code.states,"states");
		searchArr(code.tiles,"tiles");
		searchArr(code.sprites,"sprites");
		searchArr(code.objects,"objects");

		return results;
	}

	render(){

		let files:number = 0;
		let words:number = 0;
			return (
				<div>

	                <ReactWinJS.AppBar.ContentCommand
	                    key="content"
	                    icon="accept"
	                    label="Accept">

	                    <input id="mapper-command-input"
							ref = "input"
							placeholder="..."
							className="win-textbox win-interactive spice-commandbox"
							type="text"
							project = {this.state.project}
							onChange ={((evt)=>{
                                //this.getResults();
								this.props.updateSearch(this.getResults());
							}).bind(this)} />

	                </ReactWinJS.AppBar.ContentCommand>

				</div>
			);

	}

}
