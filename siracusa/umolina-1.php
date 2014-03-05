<?php
$n=10000000;
$ct_fin=1;
for($i=1; $i<=$n;$i++)
{	
	$nm=$i;
	for($ct=1;$nm != 1;$ct++){
		if($nm%2){  
			$nm=$nm*3+1;
		}else{
			$nm=$nm/2;
		}	
	}
	if( $ct > $ct_fin )
	{
		$n_n = $i;
		$ct_fin = $ct;
	}
}
echo "fin: ".$n_n;
?>