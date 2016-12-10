

var _MAP_DATA_ = function(){

	var MapData = function(temp){

		temp['title'] = 'n/a';

		temp['author'] = 'mapper1';

		temp['width'] = 1920;

		temp['height'] = 1080;

		temp['data'] = [

			{id:300,position:new Math.Vector(0,0)},
			{id:301,position:new Math.Vector(0,0)},

		];

		temp.constructor.PushData = function(data,obj){

			_MAP_DATA_.data.push(obj);
			SidebarColumnSave(false);

		}

	};

	return (function(props){

		var _temp = {};

		MapData(_temp);

		return _temp;

	})(arguments);

};

_MAP_DATA_ = new _MAP_DATA_();


var Tile = {

	position: new Math.Vector(0,0)


};

var _TileID = 0;
var _Tile = function(){

	return (function(props){

		var _tile =  new Math.Vector(props[0],props[1]);

		_tile.type = 0;

		_tile.id = _TileID;

		_TileID++;

		return _tile;

	})(arguments);

};
