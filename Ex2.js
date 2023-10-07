function diffChars(str1, str2) {
    if (str1.lenght !== str2.lenght)

    {
    return -1;
    
    }
    for(let i=0; i < str1.lenght; i++) {
        if(str1[i] === str2[i]) {
            counter++;
        }
    }

    console.log(counter);
}

diffChars('abcd', 'adfd');