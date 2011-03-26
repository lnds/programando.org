#include <iostream.h>

// este código implementa la rotación de arreglos usando la técnica descrita en 
// http://www.programando.org/blog/2011/03/rotaciones/
// basado en el segundo capítulo de programming pearls, de Jon Bentley.
 
template <class T>
void reverse(T A[], int i, int j)
{
	if (i == j)
		return;
	while (i < j) {
		T temp = A[i];
		A[i] = A[j];
		A[j] = temp;
		i++;
        j--;
	}
}

template <class T>
void rotate(T A[], int n, int i)
{
   reverse(A, 0, i-1);
   reverse(A, i, n-1);
   reverse(A, 0, n-1);
}


int main(int argc, char* argv[])
{
    char arreglo[] = "abcdefgh";
    cout << arreglo << endl;
    rotate(arreglo, 8, 3);
    cout << arreglo << endl;
}
