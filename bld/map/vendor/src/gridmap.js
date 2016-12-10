
var _GRIDMAP_COUNT = 0;

var _GridMap = function(){

	var GridMap = function forgeimage(temp){

		var w = temp.x;

		var h = temp.y;

		temp.x = 0;
		temp.y = 0;

		temp.off = new Math.Vector(w/2-window.innerWidth/2,this.app.height/10);
		temp.scrollspeed = new Math.Vector(5,5);


		var _Size = new Math.Vector(w,h);

		var _size = w;
		var _tile_size = 32 +2;

		temp.width = _size / _tile_size;
		temp.height = _size /_tile_size;

		var _map = [];

		temp.loopdata = function(fun){

			for(var x = 0; x<temp.width; x++)
				for(var y = 0; y<temp.height; y++) {

					fun(x,y);
					//_map.indexOf(id-1).position = x;
					//console.log(id);

				}

		};

		temp.populatedata = function(x,y){

			var temp = _Tile(x * _tile_size, y * _tile_size);
			var id = _map.push(temp);

		};

		temp.loopdata(temp.populatedata);

		temp.data = _map;



		temp.grid = function(visuals) {

			this.off = new Math.Vector(w/2-window.innerWidth/2,this.app.height/10);

			for(var i = 0; i<this.data.length;i++) {

				var temp = this.data[i];
				var position = temp.position;

				var x = this.x + this.off.x + Math.floor(this.data[i].position.x);
				var y = this.y + this.off.y + Math.floor(this.data[i].position.y);
				//if (x>visuals.fixX(visuals.app.width))
				//	continue;


				if (visuals.fixX(x)<(-50))
					continue;
				if (visuals.fixX(x)>(window.innerWidth+50))
					continue;

				if (visuals.fixY(y)<(-50))
					continue;
				if (visuals.fixY(y)>(window.innerHeight+50))
					continue;





				var a = false;
				if (visuals.fixX(x)<(100))
					a = true;
				if (visuals.fixX(x)>(window.innerWidth-100))
					a = true;

				if (visuals.fixY(y)<(100))
					a = true;
				if (visuals.fixY(y)>(window.innerHeight-100))
					a = true;

					if (a){

						if (i%2 == 0)
						visuals.rect_stroke( x,this.y + this.off.y + Math.floor(this.data[i].position.y),32+3,32+3,1,0.2,0,"#FFFFFF",1);
						else
						visuals.rect_stroke( this.x + this.off.x + Math.floor(this.data[i].position.x),y,32+3,32+3,1,0.2,0,"#DDDDDD",1);


					}
					else {

						if (i%2 == 0)
						visuals.rect_ext( x,this.y + this.off.y + Math.floor(this.data[i].position.y),32+3,32+3,1,0.5,0,"#FFFFFF");
						else
						visuals.rect_ext( this.x + this.off.x + Math.floor(this.data[i].position.x),y,32+3,32+3,1,0.5,0,"#DDDDDD");


					}

			}

		};

		temp.draw = function draw(visuals){

			return;
			this.app = visuals.app;

			this.gamepad = this.app.input.gamepads;
			var left = this.gamepad.left || this.app.input.keyController.keyboardCheck('leftarrow') || this.app.input.keyController.keyboardCheck('a');
			var right = this.gamepad.right || this.app.input.keyController.keyboardCheck('rightarrow') || this.app.input.keyController.keyboardCheck('d');
			var up = this.gamepad.up || this.app.input.keyController.keyboardCheck('uparrow') || this.app.input.keyController.keyboardCheck('w');
			var down = this.gamepad.up || this.app.input.keyController.keyboardCheck('downarrow') || this.app.input.keyController.keyboardCheck('s');
			var space = this.app.input.keyController.keyboardCheck('space');
			var z = this.app.input.keyController.keyboardCheck('z');
			var x = this.app.input.keyController.keyboardCheck('x');


			this.off.x += (left-right) * this.scrollspeed.x;
			this.off.y += (up-down) * this.scrollspeed.y;


		//	visuals.rect(visuals.app.width/2+this.position.x,visuals.app.height/2+this.position.y,10,10,"#FFFFFF");

					this.grid(visuals);
			visuals.free = true;


			visuals.text("x: " + this.app.input.x,300,45,"#AAAADD");
			visuals.text("y: " + this.app.input.y,300,65,"#AAAADD");
			visuals.text("y2: " + (this.app.input.y-this.off.y - Math.floor(+ (36/this.app.scale) )  ),300,85,"#AAAADD");

			visuals.free = false;

		};

	};

	return (function(props){

		var _temp =  new _Thingy(props[0],props[1],props[2]);

		_temp.type = 0;

		_temp.image = props[2];

		_temp.id = _GRIDMAP_COUNT;

		_GRIDMAP_COUNT++;

		GridMap(_temp);

		return _temp;

	})(arguments);

};
