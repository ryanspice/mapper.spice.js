/* @flow */

import React from 'react';
import ReactWinJS from 'react-winjs';

import Home_Item from './Home_Item';

export default class Home_News extends ReactWinJS.Pivot.Item {

	constructor(props:Object) {

		super(props);

		this.state = {
			count:this.props.count
		};

	}

	render(){

		var articles = [];
		var count = this.state.count;
		var data = [
			{title:'steve',date:'2010/10/10'},
			{title:'steve',date:'2010/10/10'},
			{title:'steve',date:'2010/10/10'},
			{title:'steve',date:'2010/10/10'},
			{title:'steve',date:'2010/10/10'},
			{title:'steve',date:'2010/10/10'},
			{title:'steve',date:'2010/10/10'}
		];

		for(let i = count-1;i>=0;i--){

			let articleData = data[i];

			if (!articleData)
				continue;

			let article = (
				<div key={i}>
					<img src="" className="news image" />
					<h4>{articleData.title}</h4>
					<h5>{articleData.date}</h5>
				</div>
			);

			articles.push(article);
		}

		return (

			<Home_Item	  	preview=""	  	body="Latest News."		code=""		id="homeItemLeftTile">
				{articles}
			</Home_Item>

		);

	}


}
