var _STYLE_ = `<style>

	.ColumnHide {
		max-width: 50px !important;
		//overflow:hidden !important;
	}
	.ColumnHide > #details > span > button {

		display:none;
	}

	.ColumnShow {

		max-width: 238px !important;
		//overflow:show !important;

	}

	a {

		text-decoration:underline;
		color:white;
		line-height:2rem;


	}
	.menu {

		float:left;
		border:1px solid black;

		height:100%;

		min-width: 49px;



	}

	h1 {

		margin:0px auto;
		padding:0.5rem;
		padding-left:0.5rem;
		padding-right:0rem;
		width:86%;
		text-align:left;

	}

	.menu .item {

		font-style: bold;
		vertical-align: center;
		font-size: 2rem;
		list-style: none;
		/* width: 100%; */
		height: auto;
		border: 1px solid rgba(25,25,25,0.25);
		/* margin-bottom: 5px; */
		/* padding-top: 10px; */
		/* padding-bottom: 0px; */
		min-height: 49px;
		line-height: 49px;
		/* padding-top: 50%; */
	}

	.menu .item:hover {

		cursor:pointer;
		background:rgba(255,255,255,0.075);

	}

	#cmd_upload > span > span {

	    font-size: 1.5em;
	    margin: 0px auto;
	    margin-left: 145px;
		opacity:0.5;

	}


	.fo {

		margin-top:18px;

	}
	hr {

			line-height: 0.1px;
			padding: 0px;
			height: 0.1px;
			margin-top: 3px;
			margin-bottom: 3px;
			width: 18px;

	}

	li {

		list-style:none;

	}

	.Wide {

		max-width:800px !important;

				overflow-y:scroll;

	}

	#copytoclipboard {

		clear:both;
    position: fixed;
    left: 5;
    margin-left: 1%;
	z-index:14;

	}

	#savejson {

//		min-height:320px;
//		max-height:640px;
//		height:150%;
//		width:90%;

		cursor:pointer;
		opacity:0;
		width:153px;
		height:25px;
		position:relative;
		z-index:15;

	}
	#savejson:hover {

		opacity:0.12;

	}

	#details {
		overflow-x:hidden;


	  visibility: visible;
	  opacity: 1;
	  transition: opacity 2s linear;
	}

	#details > div {
		text-align:left;

	}


	.win-container {



	}

	.slot {

		cursor:pointer;
	    margin: 0px auto;
	    margin-bottom: 1.5rem;
		border:1px dashed rgba(255,255,255,0.25);

		height:256px;
		width:80%;
		text-align:center;

	}

   	.slot > h3 {

		text-align:center;
		width:87%;
		color:rgba(255,255,255,0.25);
		margin-top:7rem;

	}

	.background {



	}


.trail-ui {

	    z-index: 4;
	    position: relative;
	    /* top: -250px; */
	    height: 100%;

}


#main {

	left:48px!important;

}



h3.win-h3 {

	line-height: 3rem;
    position: relative;
    top: -0.5rem;

}




.splitView > div:not(first) {


}

.trail-ui {

    margin-left: 63px;

}













/* Template for the items in the ListViews in this sample */
#sample {
    height: 100%;
}

#sample .smallListIconTextItem
{
    width: 100%;
    min-height: 170px;
    padding: 5px;
    overflow: hidden;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

    #sample .smallListIconTextItem img.smallListIconTextItem-Image
    {
	    margin: 0px auto;
		clear:both;
    }

    #sample .smallListIconTextItem .smallListIconTextItem-Detail
    {
        margin: 5px;
    }

#sample .button-well {
    margin: 5px;
}

#sample .headerFooterPlaceholder {
    display: none;
}

/* CSS applied to the ListViews in this sample */
#sample .listView
{
    height: 100%;
}

#sample .listView .header {
    padding: 10px;
    background-color: #333;
}

.win-button {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: transparent;
}

.win-h3 {
    color: #ffffff;
}



.win-container {

border:1px dashed rgba(255,255,255,0.5) !important;

}

.dialogue-background-upload:hover {
	border:2px solid rgba(255, 255, 255, 0.4);
}

.dialogue-background-upload  {

	margin: 0px auto;
	width: 208px;
	height: 32px;
    overflow: hidden;
	padding-top:0px;
	padding-left:4;
	padding-right:4;
	padding-bottom:0px;
	/*
	background-color:rgba(255, 255, 255, 0.2);
	*/
		border:2px solid rgba(255, 255, 255, 0);
		border:2px solid rgba(255, 255, 255, 0.2);
		width:98%;
		height:100px;

}

.dialogue-background-upload > input  {

	 position: relative; top: -5px; left: -5px;
	font-size: 50px; width: 208px; opacity: 0; filter:alpha(opacity=0);  position: relative; top: -40px;; left: -20px

}

.dialogue-background-upload > a  {

	text-decoration:none;

}

.dialogue-background-upload > button  {

	width: 208px; height: 32px;
	width:98%;
	border-color:transparent;
	background-color:transparent;

}

.dialogue-background-upload > image  {

width:100%;
height:100%;

}

.dialogue-background-upload > button:hover  {


	border-color:transparent;
	background-color:transparent;
	outline:none;
}
.dialogue-background-upload > button:focus  {


	border-color:transparent;
	background-color:transparent;
	outline:none;
}

.dialogue-background-upload-form > img  {

	margin:0px auto;
	width: 100%; height: 264px;


}

.dialogue-background-upload-form > li > span {

	position:relative;top:-3px;

}
.dialogue-background-upload-form > li:hover {

	background:rgba(255,255,255,0.5);
	cursor:pointer;

}


</style>`;
