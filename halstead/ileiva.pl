use File::Slurp "slurp";
use List::MoreUtils "uniq";

sub log2 { return log(shift)/log(2) }

($lista, $fuente)	= (shift, shift);
$codigo			= slurp $fuente;
@lista			= split '\n', slurp $lista;
@lista			= sort { $b <=> $a } @lista;

$codigo =~ s/\\\'//g;
$codigo =~ s/\\\"//g;
$codigo =~ s/\n/ /g;

foreach $op (@lista) { $op = chr(92).$1 if $op =~ m"^(\+|\*|\.|\?)$" }
push @operandos, $1 while $codigo =~ m"(\".*?\"|\'.*?\')"g;
$codigo =~ s/\".*?\"|\'.*?\'/ /g;
$codigo =~ s/\(|\)/ /g;
foreach $op (@lista) { (push @operadores, $1) && ($codigo =~ s/$op/ /) while $codigo =~ m"($op)"g }
$codigo =~ s/[[:punct:]]/ /g;
foreach $op (split '\s+', $codigo) { push @operandos, $op if $op =~ m'\S+' }
$n1 = scalar uniq @operadores;
$n2 = scalar uniq @operandos;
$N1 = scalar @operadores;
$N2 = scalar @operandos;

print "\nn1: $n1 (", join ',', uniq @operadores ,")\n";
print "N1: $N1 (", join ',', @operadores ,")\n";
print "n2: $n2 (", join ',', uniq @operandos ,")\n";
print "N2: $N2 (", join ',', @operandos ,")\n\n";

$V = ($N1 + $N2) * log2($n1 + $n2);
$D = $n1/2 * $N2/$n2;
print "	Largo del Programa: N = ", $N1 + $N2, "
	Tamanio del Vocabulario del Programa: n = ", $n1 + $n2 ,"
	Volumen del Programa: V = $V
	Nivel de Dificultad: D = $D
	Nivel del Programa: L = ", 1/$D ,"
	Esfuerzo de Implementacion: E = ", $V * $D ,"
	Tiempo de Entendimiento: T = ", ($V * $D)/18, "\n\n";


