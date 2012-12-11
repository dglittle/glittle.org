$(document).ready(function ()
{
	var can = $('<canvas />');
	can.attr("width", "400");
	can.attr("height", "400");
	can.attr("id", "canvas1");
	can.css("border", "1px");
	can.css("border-style", "solid");
	can.css("position", "absolute");
	$("body").append(can);
	var ctx = can[0].getContext("2d");
	/*var canvas = $ctx[0];

	if (canvas.getContext == undefined) {
		return G_vmlCanvasManager.initElement(canvas).getContext("2d"); 
	}*/
	
	/*
	if(typeof G_vmlCanvasManager != 'undefined')
	{
		can = G_vmlCanvasManager.initElement(can);
	}	
	*/
	ctx.beginPath();
	ctx.arc(200,200,200,0,2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();
	//ctx.globalCompositeOperation = "source-over";
	
	var can = $('<canvas />');
	can.attr("width", "400");
	can.attr("height", "400");
	can.attr("id", "canvas2");
	can.css("border", "1px");
	can.css("border-style", "solid");
	can.css("position", "absolute");
	//can.css("background-color", "solid");
	$("body").append(can);
	var ctx = can[0].getContext("2d");
	ctx.beginPath();
	ctx.arc(200,200,100,0,2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
});