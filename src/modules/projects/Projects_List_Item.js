/* @flow */

import React from 'react';

const _ProjectListItem_:Function = (data:Object, f:Function)=> {

	let sprites = data.data.sprites.length;
	let size = data.data.size;
	let objects = data.data.objects.length;
	let title = data.title;
	let company = data.author.company;

	return (
		<div className="ProjectListItem"
			onClick={()=>{
				f();
				document.getElementsByClassName('win-splitview-pane')[0].style.display = "block";
				document.getElementById('main_status').style.display = "block";
			}}>
			<center>
				<br/>
				<h2 className="win-h2">
				{title}
				</h2>
					<br/>
				<h3 className="win-h3">
				{company}
				</h3>
				<br/>
				<br/>
				<div >
					<h2 className="win-h2">
					{size}
					</h2>
					<h2 className="win-h2">
					{objects}
					</h2>
					<h2 className="win-h2">
					{sprites}
					</h2>
				</div>

			</center>
		</div>
	);

};

const _ProjectAddItem_:Function = ()=> {

	return (

		<div id="AddProject">

			<input type="file" id="files" className="files" name="file" />

			<div style={{ textAlign:'center', marginTop:'20%', fontSize:'7.5rem', opacity:0.25}}>+</div>

		</div>

	);

};

export default class List_Item extends React.Component {

	render() {

		let data = this.props.obj.data;

		if (data) {

			let func = this.props.f;

			return _ProjectListItem_(data,func);

		}	else {

			return _ProjectAddItem_();

		}

	}

}
