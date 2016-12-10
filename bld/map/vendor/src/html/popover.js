
var Popover = `

	<aside hidden style="position:fixed;left:0px;top:0px;width:100%;z-index:5;height:100%;background:rgba(25,25,25,0.55)">

	<div style="margin:0px auto; width:250px; margin-top:15%;padding:2rem;background:rgba(25,25,25,0.85)">
		<form>
			Hey we found no old map, please input dimesions.
			<br/>
			<br/>
			x<input name = 'x' value = '0' style='text-align:right;border:0px; background:none;color:white;'></input><br/>
			<br/>
			y<input name = 'y' value = '0' style='text-align:right;border:0px; background:none;color:white;'></input><br/>
			<br/>
			<input style="float:right;" type="submit" value="Create Map">
		</form>


		<button style="float:right;" onclick="window._LOAD_NAME_ = window.prompt('Enter File Name')" value="Load Map">
			Load Map
		</button>




		<br/>
	</div>

	</aside>



`;
