
import React from 'react';
import ReactWinJS from 'react-winjs';

export default class Home_Item extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			preview:this.props.preview,
			element:this.props.element,
			body:this.props.body,onClick:this.props.onClick,
			code:this.props.code,
			id:this.props.id||0
		};

	}

	updateProject(){


			console.log("#HoemItem ProjectUpdate");

	}

	render(){

		var preview = "{ innerHTML: '"+this.state.preview+"'	}";

		var body = this.state.body;

		var code = this.state.code;
		var id = this.state.id;
		var children = this.props.children  || "";
		return (

			 <li id={id} style={{listStyle:'none'}} data-win-control="WinJS.UI.Tooltip"  data-win-options={preview} >

				<pre style={{display:code==undefined?'none':'block'}}>

				 	<h2 className="win-h2" >

						{body}
					</h2>
					{ children }
					<code className='js hljs javascript' >

						{code}

					</code>

				</pre>

			</li>

		);

	}


}
