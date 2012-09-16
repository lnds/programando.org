var obj = new Object();
obj.f= new Object();
obj.f['+']= function(){
	//left
	$('#canv').turn(obj.ang);
};
obj.f['-']= function(){
	//right
	$('#canv').turn(-obj.ang);
};
obj.f['B']= function(){
	//back draw
	$('#canv').pen('black');
	$('#canv').move(-obj.lar);
};
obj.f['b']= function(){
	//back
	$('#canv').pen('none');
	$('#canv').move(-obj.lar);
};
obj.f['F']= function(){
	//Forward draw
	$('#canv').pen('black');
	$('#canv').move(obj.lar);
};
obj.f['f']= function(){
	//forward
	$('#canv').pen('none');
	$('#canv').move(obj.lar);
};
function go(s){
	if('undefined' == typeof($('#test').data('exe')) || $('#test').data('exe') != 'on'){
		var l= s.split("\n");
		obj.lar=parseInt(l.shift().match(/lar\s+(\d*)/)[1]);
		obj.ang=parseInt(l.shift().match(/ang\s+(\d*)/)[1]);
		obj.axi=l.shift().match(/axi\s+(\w*)/)[1];
		obj.iter=parseInt(l.pop().match(/iter\s+(\d*)/)[1]);
		obj.reglas = new Object();
		for(var i=0;i<l.length;i++){
			var m = l[i].match(/(\w):(.+)/);
			obj.reglas[m[1]]=m[2];
		}
		$('#prog').hide();
		$('#selector').hide();
		$('#test').text('reset').data('exe','on');
		$('#canv').moveto(400,400).turnto(90).erase();
		sistemal(obj.axi, obj.iter);
	}else{
		$('#prog').show();
		$('#selector').show();
		$('#test').text('go!').data('exe','off');
	}
	return false;
} 
function sistemal(a,lv){
	var sig='';
	for(var j=0;j<a.length;j++){
		if(lv>0){
			sig += ('undefined' != typeof(obj.reglas[a.charAt(j)])?obj.reglas[a.charAt(j)]:a.charAt(j));
		}else{
			if (typeof( obj.f[a.charAt(j)]) == 'function') { 
				obj.f[a.charAt(j)]();
			}
		}
	}	   
	if(lv>0){
		sistemal(sig,lv -1);
	}

}
