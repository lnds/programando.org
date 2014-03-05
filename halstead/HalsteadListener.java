// Generated from Halstead.g4 by ANTLR 4.0

	import java.util.*;
	import java.lang.Math;


import org.antlr.v4.runtime.tree.*;
import org.antlr.v4.runtime.Token;

public interface HalsteadListener extends ParseTreeListener {
	void enterE(HalsteadParser.EContext ctx);
	void exitE(HalsteadParser.EContext ctx);

	void enterToken(HalsteadParser.TokenContext ctx);
	void exitToken(HalsteadParser.TokenContext ctx);

	void enterMetric(HalsteadParser.MetricContext ctx);
	void exitMetric(HalsteadParser.MetricContext ctx);

	void enterOperand(HalsteadParser.OperandContext ctx);
	void exitOperand(HalsteadParser.OperandContext ctx);

	void enterOperator(HalsteadParser.OperatorContext ctx);
	void exitOperator(HalsteadParser.OperatorContext ctx);
}