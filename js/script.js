/*  ПОЛУЧАЕМ ДАННЫЕ ИЗ БЛОКОВ  */

// Блок меню
var elemMenu = document.getElementById('menu');
var elemMenuText = document.getElementById('menu-text');

// Блоки меню
var elemCell = document.getElementsByClassName('cell');
// ID блоков меню с 1 по 9
var buttonCell1 = document.getElementById('button-cell-1');
var buttonCell2 = document.getElementById('button-cell-2');
var buttonCell3 = document.getElementById('button-cell-3');
var buttonCell4 = document.getElementById('button-cell-4');
var buttonCell5 = document.getElementById('button-cell-5');
var buttonCell6 = document.getElementById('button-cell-6');
var buttonCell7 = document.getElementById('button-cell-7');
var buttonCell8 = document.getElementById('button-cell-8');
var buttonCell9 = document.getElementById('button-cell-9');

// Блок рабочего пространства
var elemWorkSpace = document.getElementById('working-space');
// Блоки в рабочем пространстве с 1 по 9
var elemWorkSpaceContainer1 = document.getElementById('working-space-container-1');
var elemWorkSpaceContainer2 = document.getElementById('working-space-container-2');
var elemWorkSpaceContainer3 = document.getElementById('working-space-container-3');
var elemWorkSpaceContainer4 = document.getElementById('working-space-container-4');
var elemWorkSpaceContainer5 = document.getElementById('working-space-container-5');
var elemWorkSpaceContainer6 = document.getElementById('working-space-container-6');
var elemWorkSpaceContainer7 = document.getElementById('working-space-container-7');
var elemWorkSpaceContainer8 = document.getElementById('working-space-container-8');
var elemWorkSpaceContainer9 = document.getElementById('working-space-container-9');
// Блоки в рабочем пространстве с 1 по 9 по классу
var elemWorkSpaceContainer = document.getElementsByClassName('container-for-button');

// Блок копирования кода
var elemCopyCode = document.getElementById('copy-code');

/* САМ СКРИПТ */

// Срабатывание кнопки 'Меню'
elemMenu.onclick = function tapping() {
	if (elemCell[0].style.display == 'flex') {
		for (var i = 0; i <= 8; i++) {
		elemCell[i].style.display = 'none';	
		}
	} else {
		elemMenuText.innerHTML = 'Меню';
		for (var i = 0; i <= 8; i++) {
			elemCell[i].style.display = 'flex';
		}
		elemWorkSpace.style.display = 'none';
		for (var i = 0; i <= 8; i++) {
			elemWorkSpaceContainer[i].style.display = 'none';
		}
		elemCopyCode.style.display = 'none';
		elemCopyCode.style.marginTop = '20px';
	}
}

// Срабатывание кнопок меню с 1 по 9

// Функция для работы кнопок
function replace(numberFunction) {
	for (var i = 0; i <= 8; i++) {
		elemCell[i].style.display = 'none';		
	}
	elemWorkSpace.style.display = 'flex';
	for (var i = 0; i <= 8; i++) {
		if (i + 1 == numberFunction) {
			elemWorkSpaceContainer[i].style.display = 'flex';
		}
	elemMenuText.innerHTML = elemCell[numberFunction - 1].innerHTML;	
	}
}


// 1 кнопка
buttonCell1.onclick = function WorkSpace1() {
	replace(1);
}

// 2 кнопка
buttonCell2.onclick = function WorkSpace2() {
	replace(2);
}

// 3 кнопка
buttonCell3.onclick = function WorkSpace3() {
	replace(3);
}

// 4 кнопка
buttonCell4.onclick = function WorkSpace4() {
	replace(4);
}

// 5 кнопка
buttonCell5.onclick = function WorkSpace5() {
	replace(5);
}

// 6 кнопка
buttonCell6.onclick = function WorkSpace6() {
	replace(6);
}

// 7 кнопка
buttonCell7.onclick = function WorkSpace7() {
	replace(7);
}

// 8 кнопка
buttonCell8.onclick = function WorkSpace8() {
	replace(8);
}

// 9 кнопка
buttonCell9.onclick = function WorkSpace9() {
	replace(9);
}

/*  ФУНКЦИЯ BORDER RADIUS */

function functionForWorkSpace1() {
	// Перемещение информации из "Range" в "Text"
	var rtl = document.getElementById('range-top-left').value;
	var rtr = document.getElementById('range-top-right').value;
	var rbr = document.getElementById('range-bottom-right').value;
	var rbl = document.getElementById('range-bottom-left').value;

	var ttl = document.getElementById('text-top-left');
	var ttr = document.getElementById('text-top-right');
	var tbr = document.getElementById('text-bottom-right');
	var tbl = document.getElementById('text-bottom-left');

	ttl.value = rtl;
	ttr.value = rtr;
	tbr.value = rbr;
	tbl.value = rbl;

	// Изменение блока
	elemWorkSpace.style.borderRadius = ttl.value + '% ' + ttr.value + '% ' + tbr.value + '% ' + tbl.value + '%';

	// Вписывание кода
	elemCopyCode.style.display = 'block';
	elemCopyCode.innerHTML = '-webkit-border-radius: ' + ttl.value + '% ' + ttr.value + '% ' + tbr.value + '% ' + tbl.value + '%' + ';' + '<br>' + '-moz-border-radius: ' + ttl.value + '% ' + ttr.value + '% ' + tbr.value + '% ' + tbl.value + '%' + ';' + '<br>' + 'border-radius: ' + ttl.value + '% ' + ttr.value + '% ' + tbr.value + '% ' + tbl.value + '%' + ';';
}


/* ФУНКЦИЯ BORDER */

function functionForWorkSpace2() {
	var widthBorder = document.getElementById('border-width-2').value;
	var styleBorder = document.getElementById('styleBorder-2').value;
	var red = document.getElementById('red-2').value;
	var green = document.getElementById('green-2').value;
	var blue = document.getElementById('blue-2').value;
	var opacity = document.getElementById('opacity-2').value;

	// Изменение блока
	elemWorkSpace.style.border = widthBorder + 'px ' + styleBorder + ' rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ')';

	// Вписывание кода
	elemCopyCode.style.display = 'block';
	elemCopyCode.innerHTML = 'border: ' + widthBorder + 'px ' + styleBorder + ' rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ');';
}


/* ФУНКЦИЯ TRANSFORM */

function functionForWorkSpace3() {
	var scale = document.getElementById('scale-3').value;
	var rotate = document.getElementById('rotate-3').value;
	var transform = document.getElementById('transform-3').value;
	var skew = document.getElementById('skew-3').value;
	var transform2 = document.getElementById('transform2-3').value;
	var skew2 = document.getElementById('skew2-3').value;

	var example = document.getElementById('example-for-3');

	var str = '';
	
	if (scale != '') {
		str = ' scale(' + scale +')';
	}
	if (rotate != '') {
		str = str + ' rotate(' + rotate + 'deg)';
	}
	if (transform != '') {
		str = str + ' translateX(' + transform + 'px)';
	}
	if (transform2 != '') {
		str = str + ' translateY(' + transform2 + 'px)';
	}
	if (skew != '') {
		str = str + ' skewX(' + skew + 'deg)';
	}
	if (skew2 != '') {
			str = str + ' skewY(' + skew2 + 'deg)';
	}
	
	// Изменение блока
	example.style.transform = str;

	// Вписывание кода
	elemCopyCode.style.display = 'block';
	elemCopyCode.innerHTML = '-moz-transform:' + str + '<br>' + '-webkit-transform:' + str + '<br>' + '-o-transform:' + str + '<br>' + '-ms-transform:' + str + '<br>' + 'transform:' + str + '<br>';
}


/* ФУНКЦИЯ BOX SHADOW */

function functionForWorkSpace4() {
	var inset = document.getElementById('inset-4').value;
	var horLenght = document.getElementById('horizontal-length-4').value;
	var verLenght = document.getElementById('vertical-length-4').value;
	var blurRadius = document.getElementById('blur-radius-4').value;
	var spread = document.getElementById('spread-4').value;
	var red = document.getElementById('red-4').value;
	var green = document.getElementById('green-4').value;
	var blue = document.getElementById('blue-4').value;
	var opacity = document.getElementById('opacity-4').value;

	// Изменение блока
	elemWorkSpace.style.boxShadow = inset + ' ' + horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + spread + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ')';

	// Вписывание кода
	elemCopyCode.style.marginTop = '10%';
	elemCopyCode.style.display = 'block';
	if (inset == 'inset') {
		elemCopyCode.innerHTML = '-webkit-box-shadow: ' + inset + ' ' + horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + spread + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ');<br>-moz-box-shadow: ' + inset + ' ' + horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + spread + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ');<br>box-shadow: ' + inset + ' ' + horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + spread + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ');';
	} else {
		elemCopyCode.innerHTML = '-webkit-box-shadow:' + inset + ' ' + horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + spread + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ');<br>-moz-box-shadow:' + inset + ' ' + horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + spread + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ');<br>box-shadow:' + inset + ' ' + horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + spread + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ');';
	}
}


/*  ФУНКЦИЯ @FONT-FACE  */

function functionForWorkSpace5() {
	var fontFamily = document.getElementById('font-face-text-1').value;
	var fontName = document.getElementById('font-face-text-2').value;


	// Вписывание кода
	elemCopyCode.style.display = 'block';
	elemCopyCode.innerHTML = "@font-face { <br>  font-family: '" + fontFamily + "'; <br>  src: url(" + fontName + ".eot), <br>       url(" + fontName + ".eot&#iefix) format('embedded-opentype'), <br>       url(" + fontName + ".woff) format('woff'), <br>       url(" + fontName + ".woff2) format('woff2'), <br>       url(" + fontName + ".ttf) format('truetype'); <br>}";
}


/*  ФУНКЦИЯ FLEXBOX  */

function functionForWorkSpace6() {
	var flexDirection = document.getElementById('flex-direction-6').value;
	var flexWrap = document.getElementById('flex-wrap-6').value;
	var justifyContent = document.getElementById('justify-content-6').value;
	var alignItems = document.getElementById('align-items-6').value;
	var example = document.getElementById('example-for-6');

	// Изменение блока
	example.style.flexDirection = flexDirection;
	example.style.flexWrap = flexWrap;
	example.style.justifyContent = justifyContent;
	example.style.alignItems = alignItems;


	// Вписывание кода
	elemCopyCode.style.marginTop = '13%';
	elemCopyCode.style.display = 'block';

	elemCopyCode.innerHTML = '.container { <br>  display: flex;<br>  flex-direction: ' + flexDirection + ';<br>  flex-wrap: ' + flexWrap + ';<br>  justify-content: ' + justifyContent + ';<br>  align-items: ' + alignItems + ';<br>}';
	

}


/* ФУНКЦИЯ TEXT SHADOW */

function functionForWorkSpace7() {
	var horLenght = document.getElementById('horizontal-length-7').value;
	var verLenght = document.getElementById('vertical-length-7').value;
	var blurRadius = document.getElementById('blur-radius-7').value;
	var red = document.getElementById('red-7').value;
	var green = document.getElementById('green-7').value;
	var blue = document.getElementById('blue-7').value;
	var opacity = document.getElementById('opacity-7').value;

	// Изменение блока
	elemWorkSpace.style.textShadow = horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ')';


	// Вписывание кода
	elemCopyCode.style.display = 'block';

	elemCopyCode.innerHTML = 'text-shadow: ' + horLenght + 'px ' + verLenght + 'px ' + blurRadius + 'px ' + 'rgba( ' + red + ', ' + green + ', ' + blue + ', ' + opacity + ');';
}


/*  ФУНКЦИЯ RGBA */


function functionForWorkSpace8() {
	// Перемещение информации из "Range" в "Text"
	var rRed = document.getElementById('range-red-8').value;
	var rGreen = document.getElementById('range-green-8').value;
	var rBlue = document.getElementById('range-blue-8').value;
	var rOpacity = document.getElementById('range-opacity-8').value;

	var tRed = document.getElementById('text-red-8');
	var tGreen = document.getElementById('text-green-8');
	var tBlue = document.getElementById('text-blue-8');
	var tOpacity = document.getElementById('text-opacity-8');

	tRed.value = rRed;
	tGreen.value = rGreen;
	tBlue.value = rBlue;
	tOpacity.value = rOpacity / 100;

	// Изменение блока	
	elemWorkSpace.style.backgroundColor = 'rgba( ' + tRed.value + ', ' + tGreen.value + ', ' + tBlue.value + ', ' + tOpacity.value + ')';

	// Вписывание кода
	elemCopyCode.style.display = 'block';
	elemCopyCode.innerHTML = 'background-color: rgba(' + tRed.value + ', ' + tGreen.value + ', ' + tBlue.value + ', ' + tOpacity.value + ');' + '<br>' + '<br>' + 'color: rgba(' + tRed.value + ', ' + tGreen.value + ', ' + tBlue.value + ', ' + tOpacity.value + ');';
}


/* ФУНКЦИЯ TRANSITION */


function functionForWorkSpace9() {
	var property = document.getElementById('transition-property').value;
	var duration = document.getElementById('transition-duration').value;
	var func = document.getElementById('transition-function').value;
	var example = document.getElementById('example-for-9');

	// Изменение блока	
	example.style.display = 'block';
	example.style.transition = property + ' ' + duration + 's ' + func;

	// Вписывание кода
	elemCopyCode.style.display = 'block';
	elemCopyCode.innerHTML = '-webkit-transition: ' + property + ' ' + duration + 's ' + func + ';<br>-moz-transition: ' + property + ' ' + duration + 's ' + func + ';<br>-ms-transition: ' + property + ' ' + duration + 's ' + func + ';<br>-o-transition: ' + property + ' ' + duration + 's ' + func + ';<br>transition: ' + property + ' ' + duration + 's ' + func + ';';
}
