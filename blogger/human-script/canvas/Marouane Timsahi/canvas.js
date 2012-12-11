/* *******************************************	/
/        Coded By : Marouane Timsahi.						/
/	For an odesk job application, by "Greg Little"		/
/	Created on :	Wednesday, October 17th, 2012		/
********************************************* */
$(document).ready(function(){
	$('<div id="canvascntnr"><canvas id="canvas1" width="400" height="400"></canvas><canvas id="canvas2" style="display:inline;" width="400" height="400"></canvas></div>').prependTo('body');
});
$(document).ready(function(){
    var first = document.getElementById('canvas1');
	var canvas1 = first.getContext('2d');
	var second = document.getElementById('canvas2');
	var canvas2 = second.getContext('2d');
        if((!first) || (!second) || (!canvas1) || (!canvas2))
        {
            alert("Impossible de récupérer le canvas");
            return;
        }
	canvas1.beginPath();
	canvas1.arc(200, 200, 200, 0, Math.PI*2); 
	canvas1.fill();
	canvas1.closePath();
	document.getElementById('canvas1').style.border='1px solid black';
	document.getElementById('canvas1').style.zIndex='1';
	document.getElementById('canvas2').style.zIndex='2';
	canvas2.beginPath(); 
	canvas2.arc(200, 200, 100, 0, Math.PI*2); 
	canvas2.fillStyle = "#ff0000";
	canvas2.fill(); 
	canvas2.closePath();
});