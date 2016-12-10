
  var React = require('react');
  var ReactWinJS = require('react-winjs');

var listIterator = 0;

  export default class SplitViewSettings extends React.Component {
	  constructor(props) {
		super(props);

		// itemDataSource
  	  	this.state = ({

			settingsList:this.props.settingsList,
			versionList:this.props.versionList,
			accountList:this.props.versionList,
			generalList:this.props.generalList
		});

		this.handleToggle = this.handleToggle.bind(this);
		this.handleListClick = this.handleListClick.bind(this);

		var self = this;
		this.listViewLayout = { type: WinJS.UI.ListLayout };




/* aonClick={self.handleToggle} */
		this.listViewItemRenderer = ReactWinJS.reactRenderer(function (item) {
			let ref = item.data.title + (listIterator++);
			return (

				<div
					className = "settingsListViewItemA"
					value={ref}
					onClick={() => self.handleListClick(ref)}
					>

				<h4 className = "win-h4 settingsListViewItem" style={{float:"left",lineHeight:"4rem"}}> {item.data.title}

				  </h4>

			  </div>
			);
		});


		this.GeneralListViewRenderer = ReactWinJS.reactRenderer(function (item) {

			let ref = item.data.title + (listIterator++);
			return (

				<div className = "settingsListViewItemA"
				value={ref}
				onClick={() => self.handleListClick(ref)} >
				<h4 className = "win-h4 settingsListViewItem" style={{float:"left",lineHeight:"4rem"}}> {item.data.title}

				  </h4>

				  			<ReactWinJS.ToggleSwitch
							 style={{float:"left",position:'relative',top:'-5px'}} />
			  </div>
			);
		});

		this.VersionListViewRenderer = ReactWinJS.reactRenderer(function (item) {

			let ref = item.data.title + (listIterator++);
			return (

				<div className = "settingsListViewItemB"
				value={ref}
				onClick={() => self.handleListClick(ref)} >
				<h4 className = "win-h4 settingsListViewItem" style={{float:"left",lineHeight:"4rem",width:"100%"}}> {item.data.title}

				  </h4>
				  <br/>
				  <br/>
				  <p className = "win-p"> Current Version: 0.1 </p>
				  <p className = "win-p"> Webpack: 0 </p>
				  <p className = "win-p"> Node: 0 </p>
				  <p className = "win-p"> Babel: 0 </p>
			  </div>
			);
		});


		window.SplitViewSettings = this;
	}

	componentWillReceiveProps(){


	}

	handleListClick(targetID){

		console.log(targetID);
		listIterator = 0;

		switch(targetID){

			case 'General0':

				this.setState({current:0});

			break;
			case 'Account1':

				this.setState({current:1});

			break;
			case 'About2':

				this.setState({current:2});
				setTimeout(function(){

					document.querySelectorAll('.win-container')[0].style.height = "320px";


				},250)

			break;
			default:

				this.setState({current:-1});

			break;

		}
	}

	handleToggle(evt){

		return;
		this.setState({current:1});
		var elm = evt.target.querySelector('span');

		console.log(elm)
		console.log(elm.target)
//		console.log(this.refs['ListViewItem'])

		return;
		let dialog = (window.Dialogue_SettingsMessage.refs['dialog'].winControl);
		dialog.show().then(function (eventObject) {
		  // eventObject.result tells you what caused the dialog to get dismissed.
		});

	}
	handleToggle2(a){
		var elm = a.target.querySelector('.win-toggleswitch-track');
		console.log(elm);
		elm.click();
	}

  	render(){

				listIterator = 0;
  		let style = {position:'fixed',top:'0px',left:'48px', width:'100%', background:'rgba(25,25,25,0.25)', marginTop:'0px', padding:'0.17em', zIndex:1005};
		let currentData = this.props.settingsList.dataSource;
		let currentLayout = this.listViewItemRenderer;

		if (this.state.current == 0) {

			currentData = this.props.generalList.dataSource;
			currentLayout = this.GeneralListViewRenderer;

		}

		if (this.state.current == 2) {

			currentData = this.props.versionList.dataSource;
			currentLayout = this.VersionListViewRenderer;

		}

		if (this.state.current == 1) {

			currentData = this.props.accountList.dataSource;
			currentLayout = this.VersionListViewRenderer;

		}


		return (

			<div style={{position:'relative',topa:'5.67rem', left:'0.67rem'}}>

				<h2 className="win-h2 hover" onClick={()=>{

					listIterator = 0;
					this.setState({current:-1});

				}}></h2>



				<ReactWinJS.ListView
				itemDataSource={currentData}
				itemTemplate={currentLayout}
				layout={this.listViewLayout}

				/>

			  </div>

			);

  	}

  }
  SplitViewSettings.propTypes = {
	   settingsList: React.PropTypes.object,
	   generalList: React.PropTypes.object,
	   versionList: React.PropTypes.object,
	   accountList: React.PropTypes.object,
	   current: React.PropTypes.number
   };


   const _LIST_SETTINGS_ = [
     { title:'General' },
     { title:'Account' },
     { title:'About' }
   ];
  SplitViewSettings.defaultProps = { current:0,

  settingsList:new WinJS.Binding.List(_LIST_SETTINGS_),
  generalList:new WinJS.Binding.List([
  	{ title:'Hide Welcome Page' },
  	{ title:'Hide News Page' },
  	{ title:'Go directly to jail, do not collect 200 if you pass go.' }
])

	,versionList:new WinJS.Binding.List([
		{
			title:'Version',
			content:''
		}
	])
	,accountList:new WinJS.Binding.List([
		{
			title:'Login to Account',
			content:''
		},
		{
			title:'Make an Account',
			content:''
		}
	])


};
