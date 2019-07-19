//原题9：https://leetcode.com/problems/palindrome-number/

//如何判断几位数
//根据几位数来算出每个位数的数
//Math.trunc() 取整
var isPalindrome = function(x) {
    if (x < 0) return false

    const num = x
    let l = 1,res = [],resoult = false;
    while(Math.abs(x) >= 10){ //判断几位数
        x = x/10
        l++
    } 

    for(let i = 0;i < l;i++){
        res.push(Math.trunc(num / (Math.pow(10,i)) % 10)); //各个位数取整放入数组
    }   
    let reverseRes = [...res]; //保留副本
    res.reverse() //反转数组 该方法会改变原来的数组，而不会创建新的数组。
    for(let i = 0;i < res.length;i++){
        if(res[i] != reverseRes[i]) {
            resoult = false
            break;
        }else{
            resoult = true
        }
    }
    return resoult

};

console.log(isPalindrome(1000000001))