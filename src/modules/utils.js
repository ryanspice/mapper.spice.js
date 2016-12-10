/* @flow */

import Cookies from 'cookies-js';
import HttpRequest from './utils/HttpRequest.js';

import project from './project.js';

declare var FileError:Object;
declare var WinJS:Object;
declare var App:Object;

var TEMPX = 0;



export default class utils {

	static error:string;
	static cookies:Cookies;
	static dragging:boolean = false;
	static dragging:boolean = false;

	static target:Object;

	//static FileError:Object = FileError;
	static HttpRequest:Object = HttpRequest;
	static Cookies:Object = Cookies;

	_error:string = "";

	constructor(){

		window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

		window.requestFileSystem(window.TEMPORARY, 1024*1024, utils.onInitFs, utils.errorHandler);

		//window.utils = utils;

		utils.Cookies.defaults = {

			path:'/',
			expires:Infinity

		}

	}


	set error (val:string):void {

		this._error = val;

	}

	get error ():string {

		return this._error;

	}

	static readSaveData(callback:Function):void {

		let information;
		if (information = utils.Cookies.get('mapper')) {

			project.load(information);

			callback(project);

			console.warn("Cookie Loaded:", information);

		}
		else  {

			utils.HttpRequest.loadXMLDoc("default.json",(data)=>{

				project.load(data);

				utils.Cookies.set('mapper',data);

				callback(project);

				console.warn("Defaults Loaded:", data);

			});

		}

	}

	static errorHandler(e:Object):void {

		var msg = '';
		utils.error = msg;
		return;
		switch (e.code) {
		case utils.FileError.QUOTA_EXCEEDED_ERR:
		  msg = 'QUOTA_EXCEEDED_ERR';
		  break;
		case utils.FileError.NOT_FOUND_ERR:
		  msg = 'NOT_FOUND_ERR';
		  break;
		case utils.FileError.SECURITY_ERR:
		  msg = 'SECURITY_ERR';
		  break;
		case utils.FileError.INVALID_MODIFICATION_ERR:
		  msg = 'INVALID_MODIFICATION_ERR';
		  break;
		case utils.FileError.INVALID_STATE_ERR:
		  msg = 'INVALID_STATE_ERR';
		  break;
		default:
		  msg = 'Unknown Error';
		  break;
		};

		utils.error = msg;

		console.warn('Error: ' + msg);

	}

	static onInitFs(fs:Object):void {

		fs.root.getFile('./details.json', {}, function(fileEntry) {

			// Get a File object representing the file,
			// then use FileReader to read its contents.
			fileEntry.file(function(file) {
			   var reader = new FileReader();

			   reader.onloadend = function(e) {

			     //var txtArea = document.createElement('textarea');
			     ///txtArea.value = this.result;
			    // document.body.appendChild(txtArea);

			   };

			   reader.readAsText(file);

			}, utils.errorHandler);

		}, utils.errorHandler);

	}

	static onPointerDown(evt:Object):void {

		//utils.dragging = true;
		//utils.target = evt.target;
		//WinJS.UI.Animation.pointerDown(evt.target);
		/*
		WinJS.UI.Animation.dragSourceStart(evt.target, [
			document.getElementById('homeItemRightTile'),
			document.getElementById('homeItemLeftTile')
		]).done(function(){


		});
		*/
		evt.preventDefault();
		evt.stopPropagation();
	}

	static onPointerUp(evt:Object):void {

		//utils.dragging = false;
		//WinJS.UI.Animation.pointerUp(evt.target);
		/*
		WinJS.UI.Animation.dragSourceEnd(evt.target,{ left:"0px" }, [
		]).done(function(){


		});
		TEMPX = -16;
		utils.target.style.left = (TEMPX) +"px";
		*/

		evt.preventDefault();
	}

	static onPointerMove(evt:Object):void {

		//evt.target.style.left = ( evt.target.style.left + 10 ) +"px";
		if (utils.dragging) {
			//evt.target.style.left =evt.offsetX  +evt.screenX+"px";

			TEMPX+=evt.movementX;

			let move = 0;
			if (TEMPX<-250	){
				move = 1;

						utils.dragging = false;
				TEMPX = -16;
				utils.target.style.left = (TEMPX) +"px";
				WinJS.UI.Animation.pointerUp(evt.target);

						evt.preventDefault();
			}
			if (TEMPX>250	){
				move = 2;

						utils.dragging = false;
				TEMPX = -16;
				utils.target.style.left = (TEMPX) +"px";
				WinJS.UI.Animation.pointerUp(evt.target);

						evt.preventDefault();
			}





			utils.target.style.left = (TEMPX ) +"px";
			/*
			evt.target.style.top = -150+evt.clientY+"px";
			evt.target.style.width = 300+"px";
			evt.target.style.height = 300+"px";
			evt.target.style.zIndex = 1000;*/
		}

		evt.preventDefault();
	}

	static addPointerDownHandlers(targetString:string):void {

		let target:Object = document.getElementById(targetString);
		target.removeEventListener("pointerdown", utils.onPointerDown, false);
		target.removeEventListener("touchstart", utils.onPointerDown, false);
		target.removeEventListener("mousedown", utils.onPointerDown, false);
		//target.removeEventListener("mousemove", utils.onPointerMove, false);

		target.addEventListener("pointerdown", utils.onPointerDown, false);
		target.addEventListener("touchstart", utils.onPointerDown, false);
		target.addEventListener("mousedown", utils.onPointerDown, false);
		//target.addEventListener("mousemove", utils.onPointerMove, false);

	}

	static addPointerUpHandlers(targetString:string):void {

		let target:Object = document.getElementById(targetString);
		target.removeEventListener("pointerup", utils.onPointerUp, false);
		target.removeEventListener("touchend", utils.onPointerUp, false);
		target.removeEventListener("mouseup", utils.onPointerUp, false);

		target.addEventListener("pointerup", utils.onPointerUp, false);
		target.addEventListener("touchend", utils.onPointerUp, false);
		target.addEventListener("mouseup", utils.onPointerUp, false);

	}

	static timeoutAnimation;
	static switchAnimations(time) {

	  WinJS.UI.disableAnimations();

	  if (utils.timeoutAnimation)
	  	clearTimeout(utils.timeoutAnimation);

	  utils.timeoutAnimation = setTimeout(()=>{

		  WinJS.UI.enableAnimations();

	  },time);

	}


}
