

var _BACKGROUNDS_COUNT_ = 0;

var _BUTTON_UPLOAD = `					<button data-win-control="WinJS.UI.Command" id="cmd_upload" style="width:100%; height:100%;    width: 100%;    position: relative;    top:20px; left:125px; opacity:0.5;   font-size: 3em;    height: 104px;" data-win-options="{
								section:'primary',
								icon: 'upload',
								onclick: Sample.outputCommand}" type="button" class="win-disposable win-command" role="menuitem" aria-label="App Bar Item"><span aria-hidden="true" class="win-commandicon" tabindex="-1"><span aria-hidden="true" class="win-commandimage win-commandglyph" tabindex="-1"></span></span><span aria-hidden="true" class="win-label" tabindex="-1"></span></button>
`;

var _BACKGROUNDS_CONTROLS_ = `<p style="text-align:left;width:100%;">Loaded: 'null'<br/></p><radio>a</radio>`;
var _BACKGROUNDS_CONTROLS_ = function(type ){return `<p style="text-align:left;width:100%;">Loaded: '${type}'<br/></p><radio>a</radio>`;};

var _COLUMN_BACKGROUNDS_ = `
	<span style="float:right;padding:1rem;padding-top:0.1rem;font-size:2.5rem;position:fixed;top:0px; right:0px;position: absolute;top: 0px;z-index:10;    right: 0px;">
		<button class="win-backbutton" onclick="SidebarColumnToggleVisibiiity()"></button></span>




`;
_COLUMN_BACKGROUNDS_SLOT_ =	 `

	<div class="smallListIconTextTemplate slot background" id="slot" onclick =" _BACKGROUNDS_ADD_(this)" data-win-control="WinJS.Binding.Template" style="display: none">
        <div class="smallListIconTextItem">


            <div class="smallListIconTextItem-Detail">
	            <img  src="" class="smallListIconTextItem-Image" data-win-bind="src: picture" />
                <h4 class="win-h4" id="title" onclick="event.preventDefault(); event.stopPropegation();" data-win-bind="innerHTML: title"></h4>
                <h6 class="win-h6" data-win-bind="textContent: text"></h6>


				<h6 class="win-h6" id="name" data-win-bind="textContent: name"></h6>
                <h6 class="win-h6" data-win-bind="textContent: size"></h6>
                <h6 class="win-h6" data-win-bind="textContent: type"></h6>
                <h6 class="win-h6" id="id" data-win-bind="textContent: id"></h6>
            </div>
		</div>

	</div>

` ;



_BACKGROUND_STORAGE_IMAGES_ = [

	{title:_BUTTON_UPLOAD, text:"", picture:"", id:0}

];


_BACKGROUND_DIALOGUE_NODE_ = null;

_BACKGROUND_DIALOGUE_START_ = function(){

	WinJS.Utilities.query("#sample").listen("iteminvoked", function(evt){

			_BACKGROUND_DIALOGUE_NODE_ = evt.target;

			var s = ((_BACKGROUND_DIALOGUE_NODE_.querySelector('img').src == "") || (_BACKGROUND_DIALOGUE_NODE_.querySelector('img').src == "file:///C:/CDriveDev/Mapper/vendor/test.html"));

			if (s)	{

				document.querySelector(".customDialog").winControl.show();
				document.querySelector(".customDialog .win-textbox").value = "Background"+_BACKGROUNDS_COUNT_;
				_BACKGROUNDS_COUNT_++;

			}
				else {
				document.querySelector(".dialogue_editBackground").winControl.show();

				document.querySelector(".dialogue_editBackground").querySelector(".win-textbox ").textContent = _BACKGROUND_DIALOGUE_NODE_.querySelector("#title").textContent;
				document.querySelector(".dialogue_editBackground").querySelector(".win-textbox ").value = _BACKGROUND_DIALOGUE_NODE_.querySelector("#title").textContent;
				var o = {started:_BACKGROUND_DIALOGUE_NODE_,target:document.querySelector(".dialogue_editBackground")};
				//document.querySelector(".dialogue_editBackground").querySelector(".win-contentdialog-primarycommand").addEventListener('click', _BACKGROUND_DIALOGUE_CONFIRM_, false);
				_BACKGROUND_INPUT_SELECT_(o);

			}

	}, false);

};



_BACKGROUND_DIALOGUE_CONFIRM_ = function(evt){

	console.log("CONFIRM")
	var img = evt.target.referenceNode.querySelector('img');// this.querySelector('img');

	var name = document.querySelector('.customDialog .win-textbox').value;// this.querySelector('img');

	if (!img.src) {
		alert('src is not found');

		return;
	}

	var temp = {title:"Steve",text:"",picture:img.src};

	temp.lastModified = img.lastModified || ")";
	temp.lastModifiedDate = img.lastModifiedDate || ")";
	temp.name = img.name || ")";
	temp.title = name;
	temp.size = img.size || ")";
	temp.type = img.type || ")";


	if (evt.target.dialogueNode.querySelector('input:checked'))
	temp.type = evt.target.dialogueNode.querySelector('input:checked').value;
	else
	temp.type = "Tile X + Y"; //evt.target.dialogueNode.querySelector('input')[0].checked = true;


	if (evt.target.id)
	_BACKGROUND_STORAGE_IMAGES_[id] = (temp);
	else
	_BACKGROUND_STORAGE_IMAGES_.unshift(temp);

	var details = document.getElementById('details');

	details.innerHTML = Mapper.column_backgrounds;

	_BACKGROUNDS_LIST_();

	evt.target.disabled = true;

	img.src = "";

	evt.target.referenceNode.innerHTML = `
	<input type="file" id="upload_input" name="upload"  />
		<button data-win-control="WinJS.UI.Command" id="cmd_upload" style="width:100%; height:100%;    width: 100%;    position: relative;    top: -67px;    font-size: 3em;    height: 104px;" data-win-options="{
					section:'primary',
					icon: 'upload',
					onclick: Sample.outputCommand}" type="button" class="win-disposable win-command" role="menuitem" aria-label="App Bar Item"><span aria-hidden="true" class="win-commandicon" tabindex="-1"><span aria-hidden="true" class="win-commandimage win-commandglyph" tabindex="-1"></span></span><span aria-hidden="true" class="win-label" tabindex="-1"></span></button>

		`;


		 document.getElementById('upload_input').addEventListener('change', _BACKGROUND_INPUT_SELECT_, false);

};

_BACKGROUND_INPUT_SELECT_ = function(evt){

	var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {

    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }



	var files = evt.target.files; // FileList object
	var fr = new FileReader();

	var elementMainChange = this;
	var elementToChange = this.parentNode;

	if (!files) {

		elementToChange = evt.target;
		involkedItem = evt.started;

		var file = involkedItem.querySelector('img');
		var lastModified = file.lastModified;
		var lastModifiedDate = file.lastModifiedDate;
		var name = file.name;
		var size = file.size;
		var type = file.type;
		var id = file.id;
		var src = file.src;

		elementToChange.querySelector('img').name = name;
		elementToChange.querySelector('img').id = id;
		elementToChange.querySelector('img').size = size+"kb";
		elementToChange.querySelector('img').type = type;
		elementToChange.querySelector('img').repeating = type;
		elementToChange.querySelector('img').src = src;

		elementToChange.querySelector('.win-contentdialog-primarycommand').disabled = false;
		console.log(elementToChange.querySelector('.win-contentdialog-primarycommand'));

		elementToChange.querySelector('.win-contentdialog-primarycommand').addEventListener('click',_BACKGROUND_DIALOGUE_CONFIRM_,false);

		//_BACKGROUND_DIALOGUE_CONFIRM_();
		elementToChange.querySelector('.win-contentdialog-primarycommand').referenceNode = elementToChange;
		elementToChange.querySelector('.win-contentdialog-primarycommand').dialogueNode = elementToChange;
		elementToChange.querySelector('.win-contentdialog-primarycommand').id = id;
	}
	else {
	var file = files[0];
	var lastModified = file.lastModified;
	var lastModifiedDate = file.lastModifiedDate;
	var name = file.name;
	var size = file.size;
	var type = file.type;

	fr.onload = function () {

		console.log('sadasdasd');

		//elementToChange.innerHTML = "<img name='' src=' "+ fr.result +" '/> ";
		elementToChange.innerHTML = `<img
			name="${name}"
			src="${fr.result}" />
		`;
		//elementToChange.querySelector('img').lastModified = lastModified;
		//elementToChange.querySelector('img').lastModifiedDate = lastModifiedDate;
		elementToChange.querySelector('img').name = name;
		elementToChange.querySelector('img').size = size+"kb";
		elementToChange.querySelector('img').type = type;
		elementToChange.querySelector('img').repeating = type;

		var OK = elementToChange.parentNode.parentNode.parentNode;

		OK.querySelector('.win-contentdialog-primarycommand').disabled = false;
		console.log(OK.querySelector('.win-contentdialog-primarycommand'));

		OK.querySelector('.win-contentdialog-primarycommand').addEventListener('click',_BACKGROUND_DIALOGUE_CONFIRM_,false);

		//_BACKGROUND_DIALOGUE_CONFIRM_();
		OK.querySelector('.win-contentdialog-primarycommand').referenceNode = elementToChange;
		OK.querySelector('.win-contentdialog-primarycommand').dialogueNode = OK;
	}

	fr.readAsDataURL(file);
	}

};

 document.getElementById('upload_input').addEventListener('change', _BACKGROUND_INPUT_SELECT_, false);

_BACKGROUNDS_LIST_ = function(){


						var itemArray;
						itemArray = _BACKGROUND_STORAGE_IMAGES_;
						var items = [];

						// Generate 16 items
						for (var i = 0; i < 12; i++) {

							var last;
						    itemArray.forEach(function (item) {

								if (last!=item){
							        last = item;
									items.push(item);
								}
						    });
						}

						items = _BACKGROUND_STORAGE_IMAGES_;

						WinJS.Namespace.define("Sample.ListView", {
						    modes: {
						        readonly: {
						            name: 'readonly',
						            selectionMode: WinJS.UI.SelectionMode.none,
						            tapBehavior: WinJS.UI.TapBehavior.none
						        },
						        single: {
						            name: 'single',
						            selectionMode: WinJS.UI.SelectionMode.single,
						            tapBehavior: WinJS.UI.TapBehavior.directSelect
						        },
						        extended: {
						            name: 'extended',
						            selectionMode: WinJS.UI.SelectionMode.multi,
						            tapBehavior: WinJS.UI.TapBehavior.directSelect
						        },
						        multi: {
						            name: 'multi',
						            selectionMode: WinJS.UI.SelectionMode.multi,
						            tapBehavior: WinJS.UI.TapBehavior.toggleSelect
						        }
						    },
						    listView: null,
						    changeSelectionMode: WinJS.UI.eventHandler(function (ev) {
						        var listView = Sample.ListView.listView;
						        if (listView) {
						            var command = ev.target;
						            if (command.textContent) {
						                var mode = command.textContent.toLowerCase();
						                listView.selection.clear();

						                Sample.ListView.context.currentMode = Sample.ListView.modes[mode];

						                listView.selectionMode = Sample.ListView.context.currentMode.selectionMode;
						                listView.tapBehavior = Sample.ListView.context.currentMode.tapBehavior;
						            }
						        }
						    }),
						    data: new WinJS.Binding.List(items),
						    context: {
						    }
						});

						Sample.ListView.context = WinJS.Binding.as({ currentMode: Sample.ListView.modes.single });


						_BACKGROUND_DIALOGUE_START_();









						var header = document.querySelector('.headerFooterPlaceholder');
						WinJS.Binding.processAll(header, Sample.ListView).then(function () {
						    return WinJS.UI.processAll();
						}).then(function () {
						    Sample.ListView.listView = document.querySelector('.listView').winControl;
						});



}




_COLUMN_BACKGROUNDS_+=_COLUMN_BACKGROUNDS_SLOT_;
_COLUMN_BACKGROUNDS_+=_COLUMN_BACKGROUNDS_SLOT_;
_COLUMN_BACKGROUNDS_+=_COLUMN_BACKGROUNDS_SLOT_;


_COLUMN_BACKGROUNDS_+=`


<div id="sample">
    <!-- Simple template for the ListView instantiation  -->

    <!-- Elements used for header and footer elements for ListView -->
    <div class="headerFooterPlaceholder"	>
        <div class="header" hidden>
            <div class="button-well">
                <button class="win-button" data-win-bind="onclick: changeSelectionMode">ReadOnly</button>
                <button class="win-button" data-win-bind="onclick: changeSelectionMode">Single</button>
                <button class="win-button" data-win-bind="onclick: changeSelectionMode">Extended</button>
                <button class="win-button" data-win-bind="onclick: changeSelectionMode">Multi</button>
            </div>
            <h3 class="win-h3">Selection Scenario: <span data-win-bind="textContent: context.currentMode.name">None</span></h3>
        </div>
    </div>

	<h4 style="width:100%;text-align:center;" class="win-type-subheader"> backgrounds </h4>




    <!-- The declarative markup necesary for ListView instantiation -->
    <!-- Call WinJS.UI.processAll() in your initialization code -->
    <div class="listView win-selectionstylefilled"
         data-win-control="WinJS.UI.ListView"
         data-win-options="{
                    itemDataSource: Sample.ListView.data.dataSource,
                    itemTemplate: select('.smallListIconTextTemplate'),
                    header: select('.header'),
                    selectionMode: 'none',
                    tapBehavior: '_C_BG_2',
                    layout: { type: WinJS.UI.ListLayout }
            }">
    </div>
</div>`
