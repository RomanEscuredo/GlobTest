function addfoo(tab, ret) {
	let b = 0;

	for (let i = 0; i < ret.length; i++) {
		if (tab[0] > ret[i][1])
			b = 1;
		if (tab[1] < ret[i][0])
			b = 2;
		if (tab[0] >= ret[i][0] && tab[0] <= ret[i][1] && tab[1] <= ret[i][1] && tab[1] >= ret[i][0]) {
			b = 0;
			break;
		}
	}
	if (b == 2)
		ret.unshift(tab);
	else if (b == 1)
		ret.push(tab);
	return ret;
}

function comparefoo(tab, ret) {
	let c = 0;
	
	for (let i = 0; i < ret.length; i++){
		if (tab[0] < ret[i][0] && tab[1] >= ret[i][0]) {
			ret[i][0] = tab[0];
			c = 1;
		}
		if (tab[0] <= ret[i][1] && tab[1] > ret[i][1]) {
			ret[i][1] = tab[1];
			c = 1;
		}
	}
	if (c == 0)
		ret = addfoo(tab, ret);
	if (ret.length == 0)
		ret.push(tab);
	return ret;
}

function foo(tab) {
	let ret = [];
	
	for (let i = 0; i < tab.length; i++) {
		ret = comparefoo(tab[i], ret);
	}
	return ret;
}

function printtab(tab) {
	let s = "";
	
	s += "[";
	s += tab[0].toString();
	s += ", ";
	s += tab[1].toString();
	s += "]";

	return s;
}

function showoutput(tab){
	let i = tab.length;
	let s = "";
	
	s += "[";
	for (let j = 0; j < i; j++) {
		if (j != 0)
			s += ", ";
		s += printtab(tab[j]);
	}
	s += "]";
	console.log(s);
}

let outputfoo;

outputfoo = foo([[0, 3], [6, 10]]);
showoutput(outputfoo);
outputfoo = foo([[0, 5], [3, 10]]);
showoutput(outputfoo);
outputfoo = foo([[0, 5], [2, 4]]);
showoutput(outputfoo);
outputfoo = foo([[7, 8], [3, 6], [2, 4]]);
showoutput(outputfoo);
outputfoo = foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]);
showoutput(outputfoo);
outputfoo = foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6], [50, 58], [56, 80], [51, 79]]);
showoutput(outputfoo);