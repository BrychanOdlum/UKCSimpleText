window.onload = function(){
	
	document.getElementById('boldOpt').addEventListener('change', bold)
	document.getElementById('italicOpt').addEventListener('change', italic)
	document.getElementById('underlineOpt').addEventListener('change', underline)
	
	/*var taElem = document.getElementById('ta');
	
	taElem.addEventListener('scroll', scrolling);
	taElem.addEventListener('click', keyPressed);
	taElem.addEventListener('keydown', keyPressed);
	taElem.addEventListener('keyup', keyPressed);
	window.onresize = resize;
	document.onkeydown = dKeyPressed;
	
	drawLineHighlight()
	generateLineNumbers()
	
	setInterval(keyPressed, 20);*/
}

function bold() {
	var taElem = document.getElementById('ta');
	var weight = window.getComputedStyle(taElem, null).getPropertyValue('font-weight') == 'normal' ? 'bold' : 'normal';
	taElem.style.fontWeight = weight;
}

function italic() {
	var taElem = document.getElementById('ta');
	var style = window.getComputedStyle(taElem, null).getPropertyValue('font-style') == 'normal' ? 'italic' : 'normal';
	taElem.style.fontStyle = style;
}

function underline() {
	var taElem = document.getElementById('ta');
	console.log(window.getComputedStyle(taElem, null).getPropertyValue('text-decoration'))
	var decoration = window.getComputedStyle(taElem, null).getPropertyValue('text-decoration') == 'none' ? 'underline' : 'none';
	taElem.style.textDecoration = decoration;
}



/*
	
	
*/


