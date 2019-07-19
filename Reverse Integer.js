//原题7：https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    let str = x.toString().split('').reverse().join('')
    if(str[str.length -1] == '-') str = '-' + str.substring(0,str.length -1)
    return (Number(str) > 2 ** 31 || Number(str) < -(2 ** 31)) ? 0 : Number(str)
};

reverse(123)
reverse(-123)
reverse(120)