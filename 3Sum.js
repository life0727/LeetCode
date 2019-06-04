//原题15：https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    if(Math.min(...nums) >= 0) return [];
    if(Math.max(...nums) <= 0) return [];
    let sortNums = nums.sort((a,b) => a - b);
    
    let positiveArr = sortNums.filter(item => item > 0);
    let negativeArr = sortNums.filter(item => item < 0);

    console.log(negativeArr)
    
    
};

const exp = [-1, 0, 1, 2, -1, -4]
threeSum(exp)

// [6,7,9,10]
// [-1,-2,-3]

// [1,2,3,4]
// [-10,-45,-80]
