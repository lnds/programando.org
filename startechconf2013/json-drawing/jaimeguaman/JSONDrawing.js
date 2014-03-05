//Halsted total effort: 3094.879091867182 
//T: 171.93772732595457    (effort / 18)
window.JSONDrawing={},
JSONDrawing.Canvas=function(){
	var canvasId=null, context=null;
	return {
		setCanvas:function(id){
			canvasId=id;
			context=document.getElementById(canvasId).getContext('2d')
		},
		getCanvasContext: function(){
			return context
		},
		background:function(color){
			context.canvas.style.backgroundColor=color
		},
		pen: function(color){
			context.strokeStyle = color
		},
		width: function(value){
			context.lineWidth=value
		},
		fill: function(color){
			context.fillStyle = color
		},
		line: function(cords){
			context.moveTo(cords[0],cords[1]);
			context.lineTo(cords[2],cords[3])
		},
		circle: function(cords){
			context.arc(cords[0],cords[1],cords[2],0,Math.PI * 2)
		},
		box: function(cords){
			context.rect(cords[0],cords[1],cords[2] - cords[0], cords[3] - cords[1])
		},
		newPath:function(){
			context.beginPath()
		},
		endDraw:function(){
			context.fill();
			context.stroke();
			context.closePath()
		}
	}
}(),
JSONDrawing.Util=function(options){
	JSONDrawing.Canvas.setCanvas(options.canvasId);
	return {
		getDefaultDraw: function(){
			return options['defaultDraw'];
		},
		getData: function(){
			return JSON.parse(document.getElementById(options.textId).value);
		}
	}
}({
	canvasId:'js-output',
	textId:'js-input',
	defaultDraw:[{
		background:"black",
		pen:"white",
		width:1,
		fill:"none"		
	}]
}), JSONDrawing.Main=function(){
	return {
		reset: function(){
			JSONDrawing.Canvas.getCanvasContext().clearRect(0,0,640,480);
			this.draw(JSONDrawing.Util.getDefaultDraw())
		},
		draw: function(data){
			for (i in data){
				this.processInstructions(data[i])
			}
		},
		processInstructions:function(data){
			for(i in data){
				JSONDrawing.Canvas.newPath(); 
				JSONDrawing.Canvas[i](data[i]);
				JSONDrawing.Canvas.endDraw()
			}
		}
	}

}();