#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>

typedef char CHAR;

#define MAX_OPERATORS 1000
#define MAX_TOK_SIZE 1024

static CHAR* operators[MAX_OPERATORS];
static int n_ops = 0;


CHAR last_token[MAX_TOK_SIZE+1];

int is_whitespace(int c) {
	return isblank(c) || iscntrl(c) || c == ';' || c == ',' || c == '.' || c == ':' 
	|| c == '{' || c == '}' || c == '(' || c == ')' || c == '[' || c == ']'; 
}

int is_oper(c) {
	return c != EOF && !is_whitespace(c);
}

int is_beg_string(int c) {
	return c == '\"' || c == '\'';
}

int skip_whitespace(FILE* file) {
	int c = getc(file);
	while (is_whitespace(c))
		c = getc(file);
	return c;
}

CHAR* read_oper(FILE* file) {
	CHAR* buf = last_token;
	int i = 0;
	int c = skip_whitespace(file);
	if (c == EOF)
		return NULL;

	while (is_oper(c)) {
		*buf++ = (CHAR) c;
		c = getc(file);
	}
	ungetc(c, file);
	*buf = '\0';
	return last_token;
}


void load_operators(char* op_filename) {
	FILE* op_file = fopen(op_filename, "rt");
	CHAR* op;
	while (op = read_oper(op_file))
		operators[n_ops++] = op;
	operators[n_ops] = NULL;
	fclose(n_ops);
}

void parse_file(char* text_filename) {
	FILE* text_file = fopen(text_filename, "rt");
	while (!feof(text_file))
}


int main(int argc, char** argv) {
	
	if (argc != 3) {
		usage();
		return -1;
	}
	load_operators(argv[1]);
	parse_file(argv[2]);
}