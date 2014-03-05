#include <iostream>
#include <cmath>
#include <map>
#include <utility>
using namespace std;
map<string, pair<double, int> > elem;
bool calc(string sym, double val, int cont, double num, int depth) {
	map<string, pair<double, int> >::iterator it;
	if(val > num || cont > 4) return false;
	if(val == num && cont == 4) {
		cout << num << " = " << sym << endl;
		return true;
	}
	if(cont == depth) elem[sym] = make_pair(val, cont);
	for(it = elem.begin(); it != elem.end(); it++) if(calc("(" + sym + " * " + it->first + ")", val*it->second.first, cont+it->second.second, num, depth) || calc("(" + sym + "+" + it->first + ")", val+it->second.first, cont+it->second.second, num, depth) || calc("(" + sym + "-" + it->first + ")", val-it->second.first, cont+it->second.second, num, depth) || calc("(" + sym + "/" + it->first + ")", val/it->second.first, cont+it->second.second, num, depth)) return true;
	return false;
}
int main() {
	int i, j;
	string sym[6] = {"4", "r(4)", "4!", ".4", ".4'", "r(.4')"};
	double val[6] = {4.0, 2.0, 24.0, 0.4, 4.0/9.0, sqrt(4.0/9.0)};
	map<string, pair<double, int> >::iterator it;
	for(i = 1; i <= 100; i++) {
		for(j = 0; j < 6; j++) elem[sym[j]] = make_pair(val[j], 1);
		for(j = 1; j <= 2; j++) {
			for(it = elem.begin(); it != elem.end(); it++) if(calc(it->first, it->second.first, it->second.second, (double)i, j)) break;
			if(it != elem.end()) break;
		}
		elem.clear();
	}
}
