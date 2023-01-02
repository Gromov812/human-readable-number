let ints = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

module.exports = function toReadable (n) {
    if (n === 0) return 'zero';
    
    let len = n.toString().length
    console.log(len);
    if (len < 2) return ints[n];
    if (len < 3) {
        return getDecs(n)
    }
    if (len < 4) {

        n = n.toString();
        return `${ints[n[0]]} hundred ${n%100 ? getDecs(n.slice(1)) : ''}`.trim();
    }
}

function getDecs (n) {
    if (n > 9 && n < 21) return ints[n];
        return `${ints[n - (n%10)]} ${ints[n%10]}`.trim();
}
