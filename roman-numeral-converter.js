function convertToRoman(num) {
/*pulls number to convert and splits digits into an array of strings*/
    let tester = num.toString().split("");
    const romanReference = {
        0:['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        1:['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        2:['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        3:['M', 'MM', 'MMM', 'MV', 'V', 'VM', 'VMM', 'VMMM', 'IX']
    };


/*pulls corresponding roman numerals out of reference object and pushes them to result*/
    let k = 0;
    let result = [];
    for(let i = tester.length-1; i>=0; i--){
        let equiv = tester[k]
        result.push(romanReference[i][parseInt(equiv)-1]);
        k++;
    }
/*joins all pushed symbols in result and removes indexes equaling undefined (when a place value is 0)*/
 return result.join("");
}
