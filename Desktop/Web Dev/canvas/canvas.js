//To draw a circle, you would use ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise).


var ctx = document.getElementById("canvas").getContext("2d");
for (var i = 0; i < 6; i++){
	for (var j = 0; j < 6; j++){
		ctx.beginPath();
		ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
		ctx.stroke();
	}
}


