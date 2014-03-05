#include <stdlib.h>
#include <stdio.h>
#include <string.h>

typedef unsigned long long NUM;
#define PR_foo "%lld"


void print_num(NUM num)
{
    printf("%llu\n", num);
}

int main(int argc, char* argv[]) 
{
	struct seq { NUM a; struct seq* next; } *o = malloc(sizeof(*o)),
  	*t=o; 
    struct { NUM m,n; struct seq* next_seq; } *w,x,y,z; 

    NUM p1 = atol(argv[1]);
    NUM p2 = atol(argv[2]);
    NUM p3 = atol(argv[3]);
    NUM n  = atol(argv[4]);
     
    w=&x;
    x.m=x.n=p1; 
    y.m=y.n=p2; 
    z.m=z.n=p3; 
  
    (x.next_seq = y.next_seq = z.next_seq = o)->a=1;
    goto harmful; 


    while(o->a>0 && n >0) 
    {
    	w->n = w->m * (w->next_seq=w->next_seq->next)->a; 

    	if (w==&z) 
    		free(t);
    
    	t = z.next_seq; 
    	w = x.n < y.n  ? &x : &y; 
    	w = z.n < w->n ? &z : w; 

harmful:
       if (o->a==w->n) 
     	  continue; 
       (o->next=malloc(sizeof*o))->a=w->n; 
       o=o->next; 
       --n;
    } 
   	print_num(o->a);
    
    return 0; 
}