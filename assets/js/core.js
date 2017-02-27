window.onload = function(){
	var taElem = document.getElementById('ta');
	
	taElem.addEventListener('scroll', scrolling);
	taElem.addEventListener('click', keyPressed);
	taElem.addEventListener('keydown', keyPressed);
	taElem.addEventListener('keyup', keyPressed);
	document.onkeydown = dKeyPressed;
	
	drawLineHighlight()
	generateLineNumbers()
}

function scrolling(event) {
	drawLineHighlight()
	generateLineNumbers()
}

function keyPressed(event) {
	drawLineHighlight()
	generateLineNumbers()
}


function dKeyPressed(event) {
	var taElem = document.getElementById('ta');
	if(event.keyCode == 9) {
		if (document.activeElement === taElem) {
			var start = taElem.selectionStart
			var val = taElem.value
			taElem.value = val.substring(0, start) + "	" + val.substring(taElem.selectionEnd)
			taElem.selectionStart = taElem.selectionEnd + 1
			taElem.focus()
			return false;
		}
	}
}




/*
	
	
*/


function drawLineHighlight() {
	var taElem = document.getElementById('ta');
	
	var line = getCurrentLine()-1
	var lineHeight = window.getComputedStyle(taElem, null).getPropertyValue('line-height');
	lineHeight = parseInt(lineHeight.replace('px', ''));
	var scrollTop = taElem.scrollTop
	
	document.getElementById('lh').style.top = ((line*lineHeight) + (2 - scrollTop)) + 'px';
	
}

function getCurrentLine() {
	var taElem = document.getElementById('ta');
    return taElem.value.substr(0, taElem.selectionStart).split("\n").length;
}

function getHeightBeforeLine(line) {
	
}

function generateLineNumbers() {
	var lnElem = document.getElementById('ln');
	var taElem = document.getElementById('ta');
	var lines = taElem.value.split("\n").length
	var scrollTop = taElem.scrollTop
	
	var linesText = ""
	for (var i = 1; i <= lines; i++) {
		linesText += i + "<br>"
	}
	
	lnElem.innerHTML = linesText;
	
	console.log(scrollTop)
	lnElem.scrollTop = scrollTop
}