
var _THINGY_COUNT = 0;

var _Thingy = function(){

	var Thingy = function forgeimage(temp){

		temp.off = new Math.Vector(0,0);

	};

	return (function(props){

		var _temp =  new Math.Vector(props[0],props[1]);

		_temp.type = 0;

		_temp.image = props[2];

		_temp.id = _THINGY_COUNT;

		_THINGY_COUNT++;

		Thingy(_temp);

		return _temp;

	})(arguments);

};
