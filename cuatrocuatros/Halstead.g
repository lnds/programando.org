grammar Halstead;


@header {
	import java.util.*;
	import java.lang.Math;

}
@parser::members {
	Map<String, Integer> operators = new HashMap<String, Integer>();
	List<String> operatorsList = new ArrayList();

	Map<String, Integer> operands = new HashMap<String, Integer>();
	List<String> operandsList = new ArrayList();

	static void println(String str) {
		System.out.println(str);
	}

	static void print(String str) {
		System.out.print(str);
	}

	static double log2(double n) {
		return Math.log(n) / Math.log(2);
	}
}

metric : token* {
			int n1 = operators.keySet().size();
			print("n1 = "+n1+" ");
			println(Arrays.toString(operators.keySet().toArray()));

			int N1 = operatorsList.size();
			print("N1 = "+N1+" ");
			println(Arrays.toString(operatorsList.toArray()));

			int n2 = operands.keySet().size();
			print("n2 = "+n2+" ");
			println(Arrays.toString(operands.keySet().toArray()));

			int N2 = operandsList.size();
			print("N2 = "+N2+" ");
			println(Arrays.toString(operandsList.toArray()));

			int N = N1 + N2;
			int n = n1 + n2;
			println("N = "+N);
			println("n = "+n);

			double V = N*log2(n);
			double D = (n1/2.0)*(N2/(double)n2);
			double L = 1.0/D;
			double E = V*D;

			println("V = "+V);
			println("L = "+L);
			println("D = "+D);
			println("E = "+E);
			println("T = "+(E/18.0));



	  };

e : token* {
			int n1 = operators.keySet().size();

			int N1 = operatorsList.size();

			int n2 = operands.keySet().size();

			int N2 = operandsList.size();

			int N = N1 + N2;
			int n = n1 + n2;

			double V = N*log2(n);
			double D = (n1/2.0)*(N2/(double)n2);
			double L = 1.0/D;
			double E = V*D;

			println("E = "+E);
			println("T = "+(E/18.0));



	  };

token 
	: operator { 
		String op = $operator.text;
		if (operators.containsKey(op)) {
			operatorsList.add(op);
		}
		else {
			operators.put(op, 1);
			operatorsList.add(op);
		} 
	}
	| operand { 
		String op = $operand.text;
		if (operands.containsKey(op)) {
			operandsList.add(op);
		}
		else {
			operands.put(op, 1); 
			operandsList.add(op);
		}
	 }
	;

operator:
'#include' | 'break' | 'bool' | 'int' | 'float' | 'double'
| 'from' | 'import' | 'def' | 'if' | 'else' | 'elif' | 'else' | 'for' | 'in' | 'print' | 'class' | 'pass'
| 'return' | 'div' | '**' | '*' | '^' | '&&' | '&' | '||' | '?' |  '/' |  '|' | '+' | '-' | '-' | '<' | '>' | '<=' | '>=' | '<>' 
| '!' | '!=' |  '%' | '=' | '==' | '!='
;

operand
	: TOK
	| STRING
	;


TOK : [_a-zA-Z0-9]+ 
	  | ESC_SEQ+
	  ;


STRING
    :  '"' ( ESC_SEQ |  ~('\\'|'"') )* '"'
    |  '\'' ( ESC_SEQ | ~('\\'|'\'') )* '\''
    ;

fragment
ESC_SEQ
    :   '\\' ( '\"'  | '\''  | '\\' | '|' | [a-zA-Z0-9]+ | '(' | ')' | '{' | '}' | '[' | ']' 
    | '+' | '*' | '-' | '/' | '^' | '%' | '$' | '&' | '<' | '>' | '=' | '~' | '!'
    | '@' | '#' | '.' | ',' | ';' | ':' | '?' | '\n' | '\r') ;


WS : ([ \r\n\t] | '(' | ')' | '[' | ']' | '{' | '}' | '.' | ';' | ':' | ',')+ -> skip;
