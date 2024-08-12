module.exports = function reverseInt(num) {
    console.log(typeof num);
    return Math.abs(num) 
        .toString()
        .split('')
        .reverse()
        .join('')
}