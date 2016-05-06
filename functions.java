function v(a,b) {
    if (a===1||b===1) {
        return 1;
    }
    return v(a-1,b)+v(a,b-1)+v(a-1,b-1);
}
