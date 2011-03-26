#include <iostream.h>


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


/// La funcion reverse es la siguiente:
int main(int argc, char* argv[])
{
    char arreglo[] = "abcdefgh";
    cout << arreglo << endl;
    rotate(arreglo, 8, 3);
    cout << arreglo << endl;
}
