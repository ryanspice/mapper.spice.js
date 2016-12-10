var CLOSETAB = function(){

var main;	main = document.getElementById('main');
console.log(main);	 main.className = 'ColumnHide';

}
var SidebarColumnToggleVisibiiity = function(){

	var main;
	main = document.getElementById('main');
	var details = document.getElementById('details');

	if ((main.className == "ColumnShow")||(main.className == "ColumnShow Wide")) {
		main.className = "ColumnHide";
	} else {
		main.className = "ColumnShow Wide";
	}


}
var SidebarColumnFunction = function(self){

	var main;
	main = document.getElementById('main');
	var details = document.getElementById('details');

	SidebarColumnToggleVisibiiity();


	details.innerText = self.innerText;


		if (details.last != self.innerText)
		main.className = "ColumnShow Wide";

	details.last = details.innerText;

	if (self.innerText == ""){

		details.innerHTML = Mapper.columndetails;

	}

	if (self.innerText == "B"){

					details.innerHTML = Mapper.column_backgrounds;
	}


	if (self.innerText == "G"){

		details.innerHTML = Mapper.columngraphics;

	}
	if (self.innerText == "?"){

		details.innerHTML = Mapper.columnhelp;

	}

	if (self.innerText == "S"){

		SidebarColumnSave(self);

	}

};

var SidebarColumnSave = function(t){

	var main;
	main = document.getElementById('main');
	var details = document.getElementById('details');
/*
	main.className = "ColumnShow Wide";

	if (t==false) {

		if (main.className = "ColumnShow Wide") {

			main.className = "ColumnHide";

		}


	}
*/

	//						SidebarColumnToggleVisibiiity();
	//details.last = details.innerText;
	details.innerHTML = Mapper.columnsave;

	var savejson = document.getElementById("savejson");
	savejson.onfocus = function() {
		savejson.select();

		// Work around Chrome's little problem
		savejson.onmouseup = function() {
			// Prevent further mouseup intervention
			savejson.onmouseup = null;

    		document.execCommand('copy');
			return false;
		};
	};

	var formatter = new JSONFormatter(_MAP_DATA_,1 ,{
	  hoverPreviewEnabled: false,
	  hoverPreviewArrayCount: 100,
	  hoverPreviewFieldCount: 5,
	  theme: 'dark'
	});

	var details = document.getElementById('details');

	details.appendChild(formatter.render());

}


var Mapper = {

	init:function(){

		this.version = 0.1;
		this.title = "Mapper " + this.version;
		this.title = `<h1>${this.title}</h1>`;

		this.help = _HELP_;
		this.save = _SAVE_;
		this.mainstyle = _STYLE_;

		this.column_backgrounds = _COLUMN_BACKGROUNDS_;

		this.menu = `<div class="menu">
			<div onclick = "SidebarColumnFunction(this)" class="item">O</div>
			<div onclick = "SidebarColumnFunction(this)" class="item">B</div>
			<div onclick = "SidebarColumnFunction(this)" class="item">T</div>
			<div onclick = "SidebarColumnFunction(this)" class="item">S</div>
		</div>`;

		this.projectTitle = `<h3 style="text-align:left;font-size:80%;width:100px;margin:10px auto;">${_MAP_DATA_['title']}</h3>`;
		this.projectAuthor = `<h3 style="text-align:left;font-size:80%;width:100px;margin:10px auto;">${_MAP_DATA_['author']}</h3>`;
		this.projectWidth = `<h3 style="text-align:left;font-size:80%;width:100px;margin:10px auto;">${_MAP_DATA_['width']}</h3>`;
		this.projectHeight = `<h3 style="text-align:left;font-size:80%;width:100px;margin:10px auto;">${_MAP_DATA_['height']}</h3>`;

		this.projectNew = `<h3 style="cursor:pointer;font-size:80%;  background:#444444;width:100px;margin:10px auto;">New</h3>`;
		this.projectSave = `<h3 style="cursor:pointer;font-size:80%;  background:#444444;width:100px;margin:10px auto;">Save</h3>`;
		this.projectLoad = `<h3 style="cursor:pointer;font-size:80%;  background:#444444;width:100px;margin:10px auto;">Load</h3>`;

		this.projectSelectionTitle0 = `<h3 style="cursor:pointer;font-size:80%; border:0px solid #dddddd;width:100px;margin:10px auto;">Backgrounds</h3>`;
		this.projectSelectionTitle1 = `<h3 style="cursor:pointer;font-size:80%; border:1px solid #dddddd;width:100px;margin:10px auto;">Objects</h3>`;
		this.projectSelectionTitle2 = `<h3 style="cursor:pointer;font-size:80%; border:0px solid #dddddd;width:100px;margin:10px auto;">Tiles</h3>`;

		this.style = "text-align:center;position:fixed;left:0px;top:0px;z-index:5;height:"+window.innerHeight+"px;width:100%;background:rgb(23, 23, 23);border-right:1px solid #EEEEFF;";



		this.imageList = _LIBRARY_LIST;
		this.markupImageList = ``;

		for(var i = this.imageList.length;i>0;i--){

			this.markupImageList += `<div style="    background: rgba(25,25,25,0.25);
			    width: 185px;
			    border-bottom: rgba(25,25,25,0.25);
			    border: rgba(25,25,25,0.25);
		    margin: 0px auto;">

					<h3 style="color:white;">sprite`+i+` `+this.loader['sprite'+i].src.split('objects/')[1]+`</h3>
					<img style="overflow:wrap;margin:0px auto;width:100%;max-width:2rem;padding:1vw;" src="`+this.loader['sprite'+i].src+`">



				</div>`;
		}


		this.column = `<div id="details" >

			</div>
		`;
		this.columndetails = `
			${this.title}
			${this.projectTitle}
			${this.projectAuthor}
			${this.projectWidth}
			${this.projectHeight}
			${this.projectNew}
			${this.projectSave}
			${this.projectLoad}

		`;

		this.columngraphics = `

			${this.projectSelectionTitle0}
			${this.projectSelectionTitle1}
			${this.projectSelectionTitle2}
			${this.markupImageList}

		`;

		this.columnhelp = `

			${this.help}

		`;

		this.columnsave = `

			${this.save}

		`;

		this.markup = `<div id="main"  class="ColumnHide" style="${this.style}">
			${this.mainstyle}
			${this.menu}
			${this.column}
			<br/>
		</div>

		${Popover}
		`;

		var Body = document.getElementsByTagName('body')[0];

		Renderer.aRender(Body,this.markup);
		this.main = document.getElementById('main');


		var details = document.getElementById('details');
		//			details.style.opacity = 1;








		var data;
		this.data = data = _MAP_DATA_;


		this.gridmap = new _GridMap(data['width'],data['height']);


		this.ColB = function(){


			details.innerHTML = Mapper.column_backgrounds;

										_BACKGROUNDS_LIST_();

			if (main.className == "ColumnShow Wide")
			{	main.className = "ColumnHide";
			return;
			}
				else {
						main.className = "ColumnShow Wide";}

		}

		this.opacity = 1;

		return;
	},

	update:function(){

		var tempstyle = "opacity:"+this.opacity+";text-align:center;position:fixed;left:0px;top:0px;z-index:5;height:"+window.innerHeight+"px;width:100%;background:rgb(23, 23, 23);border-right:1px solid #EEEEFF;";
		if (this.style!=tempstyle)
		this.style = tempstyle,	this.main.style = this.style;

		var main = document.getElementById('main');
		var details = document.getElementById('details');
		var save = document.getElementById('savejson');



		if (save)
			if (save.value!=JSON.stringify(_MAP_DATA_,null,"\t"))
				save.value = JSON.stringify(_MAP_DATA_,null,"\t");


				if (this.app.input.duration<1)
				if (this.app.input.keyController.keyboardCheck("b")) {

					this.ColB();

				}

		if (!this.app.input.kreleased)
		if (this.app.input.released){

			var y = (this.app.input.y/this.app.scale-this.gridmap.off.y - Math.floor(+ (16/this.app.scale) + 16*this.app.scale )  );
			var x = (_MAP_DATA_.width/3-window.innerWidth/2/this.app.scale) + (this.app.input.x/this.app.scale-this.gridmap.off.x - Math.floor(+ (16/this.app.scale) + 16*this.app.scale )  );

			this.data.constructor.PushData(this.data,new Math.Vector(x,y));

		}


		this.app.input.kreleased = false;

		return;
	},

	drawmapobjects:function(){

		var data = _MAP_DATA_.data;
		for(var i = 0; i<data.length;i++) {
			var temp = data[i];
			var x = temp.position.x+this.gridmap.off.x;
			var y = temp.position.y+this.gridmap.off.y;
			this.visuals.rect(x,y,10,10,"#FF00FF")
		}

	},

	draw:function(){
		var details = document.getElementById('details');
		var save = document.getElementById('savejson');

		this.gridmap.draw(this.visuals);
		this.drawmapobjects();

		return;
	}

};
