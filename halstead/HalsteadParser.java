// Generated from Halstead.g4 by ANTLR 4.0

	import java.util.*;
	import java.lang.Math;


import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class HalsteadParser extends Parser {
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__88=1, T__87=2, T__86=3, T__85=4, T__84=5, T__83=6, T__82=7, T__81=8, 
		T__80=9, T__79=10, T__78=11, T__77=12, T__76=13, T__75=14, T__74=15, T__73=16, 
		T__72=17, T__71=18, T__70=19, T__69=20, T__68=21, T__67=22, T__66=23, 
		T__65=24, T__64=25, T__63=26, T__62=27, T__61=28, T__60=29, T__59=30, 
		T__58=31, T__57=32, T__56=33, T__55=34, T__54=35, T__53=36, T__52=37, 
		T__51=38, T__50=39, T__49=40, T__48=41, T__47=42, T__46=43, T__45=44, 
		T__44=45, T__43=46, T__42=47, T__41=48, T__40=49, T__39=50, T__38=51, 
		T__37=52, T__36=53, T__35=54, T__34=55, T__33=56, T__32=57, T__31=58, 
		T__30=59, T__29=60, T__28=61, T__27=62, T__26=63, T__25=64, T__24=65, 
		T__23=66, T__22=67, T__21=68, T__20=69, T__19=70, T__18=71, T__17=72, 
		T__16=73, T__15=74, T__14=75, T__13=76, T__12=77, T__11=78, T__10=79, 
		T__9=80, T__8=81, T__7=82, T__6=83, T__5=84, T__4=85, T__3=86, T__2=87, 
		T__1=88, T__0=89, TOK=90, STRING=91, WS=92;
	public static final String[] tokenNames = {
		"<INVALID>", "'interface'", "'from'", "'&'", "'except'", "'self'", "'*'", 
		"'or'", "'<'", "'!='", "'<='", "'!!'", "'me'", "'to'", "'between'", "'case'", 
		"'super'", "'do'", "'%'", "'on'", "'*='", "'@'", "'ensure'", "'<=>'", 
		"'='", "'=~'", "'goto'", "'module'", "'repeat'", "'div'", "'mod'", "'begin'", 
		"'|='", "'when'", "'class'", "'|'", "'!'", "'foreach'", "'-='", "'each'", 
		"'default'", "'in'", "'select'", "'while'", "'-'", "'not'", "'require'", 
		"'if'", "'&='", "'program'", "'unless'", "'=/='", "'implementation'", 
		"'try'", "'?'", "'until'", "'package'", "'~='", "'rescue'", "'break'", 
		"'and'", "'+='", "'^='", "'else'", "'catch'", "'go'", "'struct'", "'$'", 
		"'import'", "'^'", "'loop'", "'+'", "'uses'", "'for'", "'<>'", "'downto'", 
		"'&&'", "'this'", "'||'", "'>'", "'then'", "'switch'", "'/='", "'where'", 
		"'=='", "'/'", "'~'", "'>='", "'#'", "'end'", "TOK", "STRING", "WS"
	};
	public static final int
		RULE_metric = 0, RULE_e = 1, RULE_token = 2, RULE_operator = 3, RULE_operand = 4;
	public static final String[] ruleNames = {
		"metric", "e", "token", "operator", "operand"
	};

	@Override
	public String getGrammarFileName() { return "Halstead.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public ATN getATN() { return _ATN; }


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

	public HalsteadParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class MetricContext extends ParserRuleContext {
		public TokenContext token(int i) {
			return getRuleContext(TokenContext.class,i);
		}
		public List<TokenContext> token() {
			return getRuleContexts(TokenContext.class);
		}
		public MetricContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metric; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).enterMetric(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).exitMetric(this);
		}
	}

	public final MetricContext metric() throws RecognitionException {
		MetricContext _localctx = new MetricContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_metric);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 1) | (1L << 2) | (1L << 3) | (1L << 4) | (1L << 5) | (1L << 6) | (1L << 7) | (1L << 8) | (1L << 9) | (1L << 10) | (1L << 11) | (1L << 12) | (1L << 13) | (1L << 14) | (1L << 15) | (1L << 16) | (1L << 17) | (1L << 18) | (1L << 19) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 23) | (1L << 24) | (1L << 25) | (1L << 26) | (1L << 27) | (1L << 28) | (1L << 29) | (1L << 30) | (1L << 31) | (1L << 32) | (1L << 33) | (1L << 34) | (1L << 35) | (1L << 36) | (1L << 37) | (1L << 38) | (1L << 39) | (1L << 40) | (1L << 41) | (1L << 42) | (1L << 43) | (1L << 44) | (1L << 45) | (1L << 46) | (1L << 47) | (1L << 48) | (1L << 49) | (1L << 50) | (1L << 51) | (1L << 52) | (1L << 53) | (1L << 54) | (1L << 55) | (1L << 56) | (1L << 57) | (1L << 58) | (1L << 59) | (1L << 60) | (1L << 61) | (1L << 62) | (1L << 63))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (64 - 64)) | (1L << (65 - 64)) | (1L << (66 - 64)) | (1L << (67 - 64)) | (1L << (68 - 64)) | (1L << (69 - 64)) | (1L << (70 - 64)) | (1L << (71 - 64)) | (1L << (72 - 64)) | (1L << (73 - 64)) | (1L << (74 - 64)) | (1L << (75 - 64)) | (1L << (76 - 64)) | (1L << (77 - 64)) | (1L << (78 - 64)) | (1L << (79 - 64)) | (1L << (80 - 64)) | (1L << (81 - 64)) | (1L << (82 - 64)) | (1L << (83 - 64)) | (1L << (84 - 64)) | (1L << (85 - 64)) | (1L << (86 - 64)) | (1L << (87 - 64)) | (1L << (88 - 64)) | (1L << (89 - 64)) | (1L << (TOK - 64)) | (1L << (STRING - 64)))) != 0)) {
				{
				{
				setState(10); token();
				}
				}
				setState(15);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}

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



				  
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EContext extends ParserRuleContext {
		public TokenContext token(int i) {
			return getRuleContext(TokenContext.class,i);
		}
		public List<TokenContext> token() {
			return getRuleContexts(TokenContext.class);
		}
		public EContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_e; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).enterE(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).exitE(this);
		}
	}

	public final EContext e() throws RecognitionException {
		EContext _localctx = new EContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_e);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 1) | (1L << 2) | (1L << 3) | (1L << 4) | (1L << 5) | (1L << 6) | (1L << 7) | (1L << 8) | (1L << 9) | (1L << 10) | (1L << 11) | (1L << 12) | (1L << 13) | (1L << 14) | (1L << 15) | (1L << 16) | (1L << 17) | (1L << 18) | (1L << 19) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 23) | (1L << 24) | (1L << 25) | (1L << 26) | (1L << 27) | (1L << 28) | (1L << 29) | (1L << 30) | (1L << 31) | (1L << 32) | (1L << 33) | (1L << 34) | (1L << 35) | (1L << 36) | (1L << 37) | (1L << 38) | (1L << 39) | (1L << 40) | (1L << 41) | (1L << 42) | (1L << 43) | (1L << 44) | (1L << 45) | (1L << 46) | (1L << 47) | (1L << 48) | (1L << 49) | (1L << 50) | (1L << 51) | (1L << 52) | (1L << 53) | (1L << 54) | (1L << 55) | (1L << 56) | (1L << 57) | (1L << 58) | (1L << 59) | (1L << 60) | (1L << 61) | (1L << 62) | (1L << 63))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (64 - 64)) | (1L << (65 - 64)) | (1L << (66 - 64)) | (1L << (67 - 64)) | (1L << (68 - 64)) | (1L << (69 - 64)) | (1L << (70 - 64)) | (1L << (71 - 64)) | (1L << (72 - 64)) | (1L << (73 - 64)) | (1L << (74 - 64)) | (1L << (75 - 64)) | (1L << (76 - 64)) | (1L << (77 - 64)) | (1L << (78 - 64)) | (1L << (79 - 64)) | (1L << (80 - 64)) | (1L << (81 - 64)) | (1L << (82 - 64)) | (1L << (83 - 64)) | (1L << (84 - 64)) | (1L << (85 - 64)) | (1L << (86 - 64)) | (1L << (87 - 64)) | (1L << (88 - 64)) | (1L << (89 - 64)) | (1L << (TOK - 64)) | (1L << (STRING - 64)))) != 0)) {
				{
				{
				setState(18); token();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}

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



				  
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TokenContext extends ParserRuleContext {
		public OperatorContext operator;
		public OperandContext operand;
		public OperandContext operand() {
			return getRuleContext(OperandContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public TokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_token; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).enterToken(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).exitToken(this);
		}
	}

	public final TokenContext token() throws RecognitionException {
		TokenContext _localctx = new TokenContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_token);
		try {
			setState(32);
			switch (_input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
				enterOuterAlt(_localctx, 1);
				{
				setState(26); ((TokenContext)_localctx).operator = operator();
				 
						String op = (((TokenContext)_localctx).operator!=null?_input.getText(((TokenContext)_localctx).operator.start,((TokenContext)_localctx).operator.stop):null);
						if (operators.containsKey(op)) {
							operatorsList.add(op);
						}
						else {
							operators.put(op, 1);
							operatorsList.add(op);
						} 
					
				}
				break;
			case TOK:
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(29); ((TokenContext)_localctx).operand = operand();
				 
						String op = (((TokenContext)_localctx).operand!=null?_input.getText(((TokenContext)_localctx).operand.start,((TokenContext)_localctx).operand.stop):null);
						if (operands.containsKey(op)) {
							operandsList.add(op);
						}
						else {
							operands.put(op, 1); 
							operandsList.add(op);
						}
					 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorContext extends ParserRuleContext {
		public OperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).enterOperator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).exitOperator(this);
		}
	}

	public final OperatorContext operator() throws RecognitionException {
		OperatorContext _localctx = new OperatorContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 1) | (1L << 2) | (1L << 3) | (1L << 4) | (1L << 5) | (1L << 6) | (1L << 7) | (1L << 8) | (1L << 9) | (1L << 10) | (1L << 11) | (1L << 12) | (1L << 13) | (1L << 14) | (1L << 15) | (1L << 16) | (1L << 17) | (1L << 18) | (1L << 19) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 23) | (1L << 24) | (1L << 25) | (1L << 26) | (1L << 27) | (1L << 28) | (1L << 29) | (1L << 30) | (1L << 31) | (1L << 32) | (1L << 33) | (1L << 34) | (1L << 35) | (1L << 36) | (1L << 37) | (1L << 38) | (1L << 39) | (1L << 40) | (1L << 41) | (1L << 42) | (1L << 43) | (1L << 44) | (1L << 45) | (1L << 46) | (1L << 47) | (1L << 48) | (1L << 49) | (1L << 50) | (1L << 51) | (1L << 52) | (1L << 53) | (1L << 54) | (1L << 55) | (1L << 56) | (1L << 57) | (1L << 58) | (1L << 59) | (1L << 60) | (1L << 61) | (1L << 62) | (1L << 63))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (64 - 64)) | (1L << (65 - 64)) | (1L << (66 - 64)) | (1L << (67 - 64)) | (1L << (68 - 64)) | (1L << (69 - 64)) | (1L << (70 - 64)) | (1L << (71 - 64)) | (1L << (72 - 64)) | (1L << (73 - 64)) | (1L << (74 - 64)) | (1L << (75 - 64)) | (1L << (76 - 64)) | (1L << (77 - 64)) | (1L << (78 - 64)) | (1L << (79 - 64)) | (1L << (80 - 64)) | (1L << (81 - 64)) | (1L << (82 - 64)) | (1L << (83 - 64)) | (1L << (84 - 64)) | (1L << (85 - 64)) | (1L << (86 - 64)) | (1L << (87 - 64)) | (1L << (88 - 64)) | (1L << (89 - 64)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			consume();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperandContext extends ParserRuleContext {
		public TerminalNode TOK() { return getToken(HalsteadParser.TOK, 0); }
		public TerminalNode STRING() { return getToken(HalsteadParser.STRING, 0); }
		public OperandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operand; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).enterOperand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HalsteadListener ) ((HalsteadListener)listener).exitOperand(this);
		}
	}

	public final OperandContext operand() throws RecognitionException {
		OperandContext _localctx = new OperandContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_operand);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			_la = _input.LA(1);
			if ( !(_la==TOK || _la==STRING) ) {
			_errHandler.recoverInline(this);
			}
			consume();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\2\3^)\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\7\2\16\n\2\f\2\16\2"+
		"\21\13\2\3\2\3\2\3\3\7\3\26\n\3\f\3\16\3\31\13\3\3\3\3\3\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\5\4#\n\4\3\5\3\5\3\6\3\6\3\6\2\7\2\4\6\b\n\2\4\3\3[\3\\]&\2"+
		"\17\3\2\2\2\4\27\3\2\2\2\6\"\3\2\2\2\b$\3\2\2\2\n&\3\2\2\2\f\16\5\6\4"+
		"\2\r\f\3\2\2\2\16\21\3\2\2\2\17\r\3\2\2\2\17\20\3\2\2\2\20\22\3\2\2\2"+
		"\21\17\3\2\2\2\22\23\b\2\1\2\23\3\3\2\2\2\24\26\5\6\4\2\25\24\3\2\2\2"+
		"\26\31\3\2\2\2\27\25\3\2\2\2\27\30\3\2\2\2\30\32\3\2\2\2\31\27\3\2\2\2"+
		"\32\33\b\3\1\2\33\5\3\2\2\2\34\35\5\b\5\2\35\36\b\4\1\2\36#\3\2\2\2\37"+
		" \5\n\6\2 !\b\4\1\2!#\3\2\2\2\"\34\3\2\2\2\"\37\3\2\2\2#\7\3\2\2\2$%\t"+
		"\2\2\2%\t\3\2\2\2&\'\t\3\2\2\'\13\3\2\2\2\5\17\27\"";
	public static final ATN _ATN =
		ATNSimulator.deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
	}
}