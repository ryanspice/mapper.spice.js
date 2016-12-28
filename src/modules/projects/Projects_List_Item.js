/* @flow */

import React from 'react';

export default class List_Item extends React.Component {


	render() {




		let data = this.props.obj.data;




		if (data) {

			let sprites = this.props.obj.data.data.sprites.length;
			let size = this.props.obj.data.data.size;
			let objects = this.props.obj.data.data.objects.length;

		return (

			<div className="ProjectListItem"
				onClick={()=>{ this.props.f();
					document.getElementsByClassName('win-splitview-pane')[0].style.display = "block";
					document.getElementById('main_status').style.display = "block"; 
				}}>
				<center>
					<br/>
					<h2 className="win-h2">
					{this.props.obj.data.title}
					</h2>
						<br/>
					<h3 className="win-h3">
					{this.props.obj.data.author.company}
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

		)}	else {

			return (

				<div id="AddProject">

					<input type="file" id="files" className="files" name="file" />

					<div style={{ textAlign:'center', marginTop:'20%', fontSize:'7.5rem', opacity:0.25}}>+</div>

				</div>

			)

		}

	}

}
