var express = require('express');
var app = express();
var webpack = require('webpack');
var path = require('path');

var compiler = webpack(require('./webpack.config.js'));

app.use(require('webpack-dev-middleware')(compiler, {
	// display no info to console (only warnings and errors)
    noInfo: false,

    // display nothing to the console
    quiet: false,

    // switch into lazy mode
    // that means no watching, but recompilation on every request
    lazy: false,

    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 500,
        poll: true
    },

  publicPath: '/bld/'
}));

app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');

  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000);
