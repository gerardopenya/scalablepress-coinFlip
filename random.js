function flip() {
    return Math.random() >= 0.5;
}

/**
 * Returs a string representation of dec as binary
 * @param dec 
 */
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

/**
 * n must be greater than 0
 * n must be less than 1,000,000
 * Returns a number between [0, n)
 * 
 * @param n 
 */
function randomNumber(n) {
    if (n <= 0 || n >= 1000000) {                                           
        throw "Not a valid parameter"
    }
    let length = dec2bin(n).length;                                           // get the length of the binary representation of n
    let randomNum = 0;
    do {
        let binaryArray = new Array(length).fill(0).map(function (x) {       // get a random binary array of "length" elements filled with flip()
            return flip() ? '1' : '0';
        });
        let binaryString = binaryArray.reduce(function (preStr, index) {     // transform the random binary array to a string
            return preStr + index
        }, '')
        randomNum = parseInt(binaryString, 2);                               // convert the binary string to a number
    } while ( randomNum >= n);                               // if the number is in range we finish
    return randomNum;
}
