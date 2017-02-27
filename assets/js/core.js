window.onload = function(){
	var taElem = document.getElementById('ta');
	
	taElem.addEventListener('scroll', scrolling);
	taElem.addEventListener('click', keyPressed);
	taElem.addEventListener('keydown', keyPressed);
	taElem.addEventListener('keyup', keyPressed);
	window.onresize = resize;
	document.onkeydown = dKeyPressed;
	
	drawLineHighlight()
	generateLineNumbers()
	
	setInterval(keyPressed, 20);
}

function scrolling(event) {
	drawLineHighlight()
	generateLineNumbers()
}

function keyPressed(event) {
	drawLineHighlight()
	setTASize()
	generateLineNumbers()
}

function dKeyPressed(event) {
	var taElem = document.getElementById('ta');
	if (document.activeElement === taElem) {
		if(event.keyCode == 9) {
			var start = taElem.selectionStart
			var val = taElem.value
			taElem.value = val.substring(0, start) + "	" + val.substring(taElem.selectionEnd)
			taElem.selectionStart = taElem.selectionEnd + 1
			taElem.focus()
			return false;
		}
		if(event.keyCode == 13) {
			console.log("added")
			var tapElem = document.getElementById('ta-p');
			tapElem.innerHTML += "<br>"
			drawLineHighlight()
			setTASize()
			generateLineNumbers()
		}
	}
}

function resize() {
	setTASize()
}




/*
	
	
*/


function drawLineHighlight() {
	var taElem = document.getElementById('ta');
	
	var line = getCurrentLine()-1
	var lineHeight = window.getComputedStyle(taElem, null).getPropertyValue('line-height');
	lineHeight = parseInt(lineHeight.replace('px', ''));
	var scrollTop = taElem.scrollTop
	
	document.getElementById('lh').style.top = ((line*lineHeight) + (scrollTop)) + 'px';
	
}

function getCurrentLine() {
	var taElem = document.getElementById('ta');
    return taElem.value.substr(0, taElem.selectionStart).split("\n").length;
}

function getHeightBeforeLine(line) {
	var taElem = document.getElementById('ta');
	var tapElem = document.getElementById('ta-p');
	
	tapElem.innerHTML = taElem.value
	tapElem.innerHTML = tapElem.innerHTML.replace(/</g, '&lt;');
	tapElem.innerHTML = tapElem.innerHTML.replace(/>/g, '&gt;');
	tapElem.innerHTML = tapElem.innerHTML.replace(/\n/g, '<br>');
	tapElem.innerHTML = tapElem.innerHTML.replace(/ /g, '&nbsp;');
	tapElem.innerHTML = tapElem.innerHTML.replace(/\t/g, '&#09;');
	tapElem.innerHTML += "<br>"
}


function setTASize() {
	var taElem = document.getElementById('ta');
	var tapElem = document.getElementById('ta-p');
	
	taElem.style.height = tapElem.offsetHeight + 'px'
}

function generateLineNumbers() {
	var lnElem = document.getElementById('ln');
	var taElem = document.getElementById('ta');
	var lines = taElem.value.split("\n").length
	
	var linesText = ""
	for (var i = 1; i <= lines; i++) {
		linesText += i + "<br>"
	}
	
	getHeightBeforeLine(lines)
	
	lnElem.innerHTML = linesText;
}