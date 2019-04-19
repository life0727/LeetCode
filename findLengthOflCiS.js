//原题674：hhttps://leetcode.com/problems/longest-continuous-increasing-subsequence/submissions/

var findLengthOfLCIS = function(nums) {
    let count = 1;
    let res = 1;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]<nums[i + 1]){
            count ++
            count > res && (res = count)
        }else{
            count = 1
        }
    }
    if(nums.length == 0) res = 0
    return res
};
