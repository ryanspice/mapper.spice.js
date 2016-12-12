/* @flow */

import React from 'react';

import ReactWinJS from 'react-winjs';

import project from "./project"

type ElementRef = any;


export default class Main_Status extends ReactWinJS.AppBar {

	constructor(props:Object){

		super(props);

		this.state = {project:props.project, selected:0};

		this.getResults = this.getResults.bind(this);

	}

	getCode=()=>{

		return JSON.parse(project.code);

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

        results.push("Objects");
		searchArr(code.objects,"objects");

		return results;
	}

    checkKey(e:Event):string {

        e = e || window.event;

        if (e.keyCode == '38') {
            return 'up';// up arrow
        }
        else if (e.keyCode == '40') {
            return 'down';// down arrow
        }
        else if (e.keyCode == '37') {
           return 'left';// left arrow
        }
        else if (e.keyCode == '39') {
           return 'right';// right arrow
        }

        return '';
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
                            onKeyPress = {((evt)=>{

                                if (this.checkKey(evt)=='up'){

                                    //this.setState({selected:this.state.selected++});

                                }
                                if (this.checkKey(evt)=='down'){

                                    //this.setState({selected:this.state.selected--});

                                    //this.props.updateSearch(this.getResults(),'alert()');
                                }

                            }).bind(this)}

							onChange ={((evt)=>{

                                //this.getResults();
                                this.setState({selected:0});
								this.props.updateSearch(this.getResults(),null);

							}).bind(this)}
							onFocus ={((evt)=>{

								//this.props.updateSearch(this.getResults(),null);
                                this.refs.input.value = "";

							}).bind(this)}
                            onBlur = {((evt)=>{

                                setTimeout((evt)=>{

                                    this.setState({selected:0});
                                    this.props.updateSearch([],'');

                                },1000)

                            }).bind(this)}
                        />

	                </ReactWinJS.AppBar.ContentCommand>

				</div>
			);

	}

}
