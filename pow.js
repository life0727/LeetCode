//快速幂算法 https://leetcode-cn.com/problems/powx-n/
//实现 pow(x, n) ，即计算 x 的 n 次幂函数。

//快速幂算法  分治思想

var myPow = function(x, n) {
    let _n = Math.abs(n);
    if(n === 0) return 1;
    let res = n % 2 === 0 ? myPow(x * x , _n / 2) : myPow(x , _n - 1)  * x;
    return n > 0 ? res : 1 / res;
};
