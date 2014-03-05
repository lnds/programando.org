for ($n = shift; $n >= 1; $n--) {
	$l = $n;
	print $l = $l%2?$l*3+1:$l/2 while $l>1 ;
	$l = length($c);
	($index, $lmax)  = ($n, $l) if ($l > $lmax);
}
print "$index\n"
