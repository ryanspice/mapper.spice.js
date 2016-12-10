
import React from 'react';
import Home_Item from './Home_Item';

export default class Home_References extends React.Component {

	render(){

		return (<div id="HomeRightside">

					<nav id = "ReferenceList">

						<h3 hidden id="ToolsListTitle" className="win-h3">Tools</h3>

						<ul style={{position:'relative',top:''}}>

							<Home_Item
					  	  	preview=""
					  	  	body="Tools"
							code={(<a> </a>)}
					  		/>
							<Home_Item
					  	  	preview=""
					  	  	body=""
							code={(<h4 className="win-h4"><a className="nolinkstyle" href="http://closure-compiler.appspot.com/home"> Google Closure Compiler </a></h4>)}
					  		/>
							<Home_Item
					  	  	preview=""
					  	  	body=""
							code={(<h4 className="win-h4"><a className="nolinkstyle" href="http://imagecolorpicker.com/">Colour Picker</a></h4>)}
					  		/>
							<Home_Item
					  	  	preview=""
					  	  	body=""
							code={(<h4 className="win-h4"><a className="nolinkstyle" href="http://www.quirksmode.org/js/detect.html">Browser Detect</a></h4>)}
					  		/>


						</ul>


						<h3 hidden id="ReferenceListTitle" className="win-h3">References</h3>

						<p hidden>A collection of useful articles/references.</p>

						<ul style={{position:'relative',top:''}} >

						<Home_Item
						preview=""
						body="References"
						code={(<a> </a>)}
						/>
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://beej.us/blog/data/html5s-canvas-2-pixel/"> Pixel Manipulation</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://javascriptweblog.wordpress.com/2011/04/04/the-javascript-comma-operator/?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+JavascriptJavascript+%28JavaScript%2C+JavaScript%29"> The JavaScript Comma Operator</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=9UdRuZ5q-HR"> Some Useful JavasScript Object Creation Patterns</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html"> Object.create(): the New Way to Create Objects in JavaScript</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://www.html5rocks.com/en/"> Object.observe()</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://blog.another-d-mention.ro/programming/read-load-files-from-zip-in-javascript/">Read/Load files from ZIP in JavaScript</a>)} />

						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://www.hiteshagrawal.com/javascript/javascript-parsing-xml-in-javascript/">Parsing XML</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://www.yuiblog.com/blog/2010/12/14/strict-mode-is-coming-to-town/">Strict Mode is Coming To Town</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://higherorderfun.com/blog/2012/06/03/math-for-game-programmers-05-vector-cheat-sheet/">Vector Math</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://www.gamedev.net/blog/43/entry-2260411-html5-audio-for-games-made-easy/">Audio3DOutput.js</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="https://github.com/ScottHamper/Cookies#browser-compatibility">Cookies.js</a>)} />
						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://www.html5rocks.com/en/tutorials/device/orientation/">Device Orientation</a>)} />

						<Home_Item
						preview=""
						body=""
						code={(<a className="nolinkstyle" href="http://moz.com/blog/most-entertaining-guide-to-landing-page-optimization?utm_source=hootsuite&amp;utm_campaign=hootsuite">The Most Entertaining Guide to Landing Page Optimization</a>)} />


						</ul>

					</nav>

		</div>);

	}

}
