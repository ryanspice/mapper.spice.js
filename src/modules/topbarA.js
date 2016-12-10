var React = require('react');
export default class TopBarA extends React.Component {

	render(){
		let style = {position:'fixed',top:'0px',left:'48px', width:'100%', background:'rgba(25,25,25,0.25)', marginTop:'0px', padding:'0.17em', zIndex:1005};
		return (<h1 style={style}>  </h1>);

	}

}
