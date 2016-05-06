function v(a,b) {
    if (a===1||b===1) {
        return 1;
    }
    return v(a-1,b)+v(a,b-1)+v(a-1,b-1);
}

var table = [];
function vt(a,b) {
	if (table[a]) {
		if (table[a][b]) {
			return table[a][b]
		}
	}
	if (table[a]===undefined) {
		table[a]=[];
	}
	if (a===0||b===0) {
		table[a][b]=1;
	} else {
		table[a][b] = vt(a-1,b)+vt(a,b-1)+vt(a-1,b-1);
	}
	return table[a][b];
}
