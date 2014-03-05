
n () {
	var canvas = $("#canvas")[0],
		ctx = canvas.getContext("2d"),
		
		actions = {
			pen : function (color) {
				ctx.strokeStyle = color;
			},
			fill: function (color) {
				ctx.fillStyle = color;
			},
			width: function (width) {
				ctx.lineWidth = width;
			},
			line: function (dimension) {
				ctx.moveTo(dimension[0], dimension[1]);
				ctx.lineTo(dimension[2], dimension[3]);
			},
			circle: function (dimension) {
				ctx.arc(dimension[0], dimension[1], dimension[2], 0, 2 * Math.PI, false);
			},
			box: function (dimension) {
				ctx.rect(dimension[0], dimension[1], dimension[2] - dimension[0], dimension[3] - dimension[1]);
			},
			background: function (color) {
				canvas.style.background = color;
			}
		},
		
		draw = function () {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            actions.background("black");
            ctx.strokeStyle = "white";
            ctx.fillStyle = "none";
            ctx.lineWidth = 1;
			var instructions = $.parseJSON($("#json").val());
            $.each(instructions, function(i, instruction) {
                $.each(instruction, function(command, params) {
                    ctx.beginPath();
					actions[command](params);
					if (ctx.fillStyle !== "none") ctx.fill();
					ctx.stroke();
                });
            });
		};
		
    actions.background("black");
	$("#draw").on("click", draw);
})();
