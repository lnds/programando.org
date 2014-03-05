<?php
function ops_callback($op){
	(strlen($op) == 1) ? $op = '\\'.$op : $op = '';
		return $op;
}
$op = file($argv[1], FILE_IGNORE_NEW_LINES);
arsort($op);
preg_replace_callback('/\\S+/',
	create_function('$matches','global $arrN2, $arrn2; $matches[0] = $arrN2[] = $matches[0]; $arrn2[$matches[0]] = $matches[0]; return " ";'),
	preg_replace_callback('/('.implode('|', array_filter(array_map('ops_callback', $op))).')/',
		create_function('$matches', 'global $arrN1, $arrn1; $arrN1[] = trim($matches[0]); $arrn1[trim($matches[0])] = trim($matches[0]); return " ";'),
		preg_replace_callback('(\s'.implode('\s|\s', array_map('preg_quote', $op)).'\s)',
			create_function('$matches', 'global $arrN1, $arrn1; $arrN1[] = trim($matches[0]); $arrn1[trim($matches[0])] = trim($matches[0]); return " ";'),
			preg_replace_callback('/[\.\,\:\;\(\)\[\]\{\}]/',
				create_function('$matches', 'return " ";'),
				preg_replace_callback('/([^"\\\\])("([^"\\\\]|\\\\.)*")|([^\'\\\\])(\'([^\'\\\\]|\\\\.)*\')/',
					create_function('$matches', 'global $arrN2, $arrn2; $matches = array_values(array_filter($matches)); $arrN2[] = $matches[2]; $arrn2[$matches[2]] = $matches[2]; return $matches[1];'),
					implode(' ', file($argv[2])))
			)
		)
	)
);
$T = ($E = ($V = ($N = ($N1 = sizeof($arrN1)) + ($N2 = sizeof($arrN2))) * log($n = ($n1 = sizeof($arrn1)) + ($n2 = sizeof($arrn2)), 2)) * ($D = ($n1/2) * ($N2/$n2)))/18;
$L = 1/$D;
echo " n1 = $n1 (".implode( ', ', $arrn1 ).")\n N1 = $N1 (".implode( ', ', $arrN1 ).")\n n2 = $n2 (".implode( ', ', $arrn2 ).")\n N2 = $N2 (".implode( ', ', $arrN2 ).")\n\n N = $N\n n = $n\n V = $V\n L = $L\n D = $D\n E = $E\n T = $T\n";

