//原题35：https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    const num = [target,...nums];
    let sortNums = num.sort((a,b) => a - b);
    let res = sortNums.indexOf(target);
    console.log(res)
};  

searchInsert( [6,7,9,10],11)
// [6,7,9,10]
// [-1,-2,-3]

// [1,2,3,4]
// [-10,-45,-80]
