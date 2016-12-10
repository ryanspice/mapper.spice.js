

	var _App = ((SpiceJS.create()).OnLoad = function (self) {

		var width = 1224;
		var height = 720;

		//self.main = {update:function(){},draw:function(){},init:function(){}};
		self.main = LoadingScreen;
		self.mapper = Mapper;

		self.start(width, height);

		window.Application = this;

	});
