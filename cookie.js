	function addItem() {
		var text = document.getElementById('objective').value;
		if (text.length > 0) {
			var date = new Date();
			setCookie('obj' + date.getTime(), encodeURIComponent(text));
			addListItem('obj' + date.getTime(), text);
			document.getElementById('objective').value = '';
			
		}
	}
	// enter value code
	function enter(e, input) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 0) {
			addItem();
		}
	}
	//set cookie in js
	function setCookie(sName, sValue) {
		document.cookie = sName + '=' + escape(sValue);
		var date = new Date();
		date.setMonth(date.getYear() + 1);
		document.cookie += ('; expires=' + date.toUTCString());
		// alert(setCookie);
	}

	//display cookie value 
	function addListItem(id, text) {
		var list = document.getElementById('list');
		list.innerHTML +=
			'<li class="mt-2" id=' + id + '>' + text + ' <button class="float-right bg-danger  text-white"  mt-1" onclick="deleteItem(\'' + id + '\')">delete</button><button class="float-right mr-3 bg-primary text-white" onclick="editItem(\'' + id + '\')">Edit</button></li>';
	}

	//edit item find button clieck value
	function getCookie(name) {
		name = name + "=";
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			while (cookie.charAt(0) == ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(name) == 0) {
				return cookie.substring(name.length, cookie.length);
			}
		}
		return "";
	}
	//click to move value and id on input box 
	function editItem(id, text) {
		var text = document.getElementById("objective");
		var saveitem = document.getElementById("saveitem");
		var addbtn = document.getElementById("addbtn");
		var saveedititem = document.getElementById("saveedititem");
		var list = document.getElementById('list');
		var cookies = document.cookie.split('; ');
		saveitem.value = id;

		var x = getCookie(id);
		text.value = x;
		// alert(x);
		document.getElementById('saveedititem').value = '';


		//button show and hide code
		addbtn.style.display = "none";
		saveedititem.style.display = "block";

		//secound trick to edit item but not legal
		// deleteItem(id)
	}

	var saveedititem = document.getElementById("saveedititem");
	function edititem(id, text) {

		//var addbtn = document.getElementById("addbtn");
		var text = document.getElementById('objective').value;
		var cookies = document.cookie.split('; ');
		var saveitem = document.getElementById("saveitem");
		var list = document.getElementById('list');

		setCookie(saveitem.value, text);
		
		var saveitem = document.getElementById('saveitem').value = '';
		addListItem(id, decodeURI(decodeURI(text)));
		
		location.reload();


		saveedititem.style.display = "none";
		addbtn.style.display = "block";
}

	//get all cookie 
	function checkForObjectives() {
		var list = document.getElementById('list');
		var cookies = document.cookie.split('; ');
		//cookies.sort();
		for (var i = 0; i < cookies.length; i++) {
			var part = cookies[i].split('=');
			if (part[0].indexOf('obj') === 0) {
				addListItem(part[0], decodeURI(decodeURI(part[1])));
				// alert(addListItem(part[0],decodeURI(decodeURI(part[1]))));
			}
		}
	}


	//delete item code
	function unsetCookie(sName) {
		document.cookie = sName + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
	}
	function deleteItem(id) {
		document.getElementById(id).style.display = 'none';
		unsetCookie(id);
	}

