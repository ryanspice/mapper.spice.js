/* @flow */

declare class XMLHttpRequest {

	static DONE:number;

	onreadystatechange:Function,
	responseText:string,
	open:Function,
	send:Function

}

export default class HttpRequest {

	static loadXMLDoc(dat:string,funct):void {

		let xmlhttp:XMLHttpRequest = new XMLHttpRequest();
		xmlhttp.onreadystatechange = ()=>{
			if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			   if (xmlhttp.status == 200) {
				   console.log(JSON.parse(xmlhttp.responseText));
				   funct(xmlhttp.responseText);
			   }
			   else if (xmlhttp.status == 400) {
				  alert('There was an error 400');
			   }
			   else {
				   alert('something else other than 200 was returned');
			   }
			}
		};
		xmlhttp.open("GET", dat, true);
		xmlhttp.send();

	}

}
