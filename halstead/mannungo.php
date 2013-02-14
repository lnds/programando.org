<?php

$N1 = ( $N2 = array() );
if( preg_match_all( '/("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')/', ( $code = file_get_contents( $argv[2] ) ), $m ) ) {
	$code = str_replace( ( $N2 = $m[1] ), ' ', $code );
}

if( preg_match_all( ( $op = '#('.implode( '|', array_map( 'preg_quote', file( $argv[1], FILE_IGNORE_NEW_LINES ) ) ).')#' ), $code, $m ) ) {
	$NN1 = sizeof( $N1 = $m[1] );
}

if( preg_match_all( '/\b(\w+)\b/',  preg_replace( $op, ' ', $code ), $m ) ) $N2 = array_merge( $N2, $m[1] );

$N = $NN1 + ( $NN2 = sizeof( $N2 ) );
$n = ( $nn1 = sizeof( $n1 = array_unique( $N1 ) ) ) + ( $nn2 = sizeof( $n2 = array_unique( $N2 ) ) );
$E = ( $V = $N * log( $n, 2 ) ) * ( $D = ( $nn1 / 2) * ( $NN2 / $nn2 ) );

print "n1 = $nn1 (".implode( ', ', $n1 ).")\nN1 = $NN1 (".implode( ', ', $N1 ).")\nn2 = $nn2 (".implode( ', ', $n2 ).")\nN2 = $NN2 (".implode( ', ', $N2 ).")\n\nN = $N\nn = $n\nV = $V\nL = ".( 1 / $D )."\nD = $D\nE = $E\nT = ".( $E / 18 );

