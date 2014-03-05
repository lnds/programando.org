function jsondrawing( j ) {
	try {
		j = eval( j );

		( ctx = ( c = document.getElementById( 'c' ) ).getContext( '2d' ) ).clearRect( 0, 0, 640, 480 );
		c.style.backgroundColor = 'black';

		d = { 'pen': 'white', 'width': 1, 'fill': 'none' };

		for( i in j ) {
			for( k in j[i] ) {
				l = j[i][k];
				d[k] = k != 'width' && typeof l == 'number' ? '#'+(0x1000000|l).toString(16).substring(1) : l;

				ctx.fillStyle = d['fill'];
				ctx.strokeStyle = d['pen'];
				ctx.lineWidth = d['width'];

				ctx.beginPath();
				if( k == 'background' ) c.style.backgroundColor = d[k];
				if( k == 'circle' ) ctx.arc( l[0], l[1], l[2], 0, 6.283185307179586 );
				if( k == 'box' ) ctx.rect( l[0], l[1], l[2] - l[0], l[3] - l[1] );
				if( k == 'line' ) {
					ctx.moveTo( l[0], l[1] );
					ctx.lineTo( l[2], l[3] );
				}
				ctx.stroke();
				if( d['fill'] != 'none' ) ctx.fill();
			}
		}
	} catch( e ) {
		alert( e );
	}
}
