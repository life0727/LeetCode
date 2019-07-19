//原题53：https://leetcode.com/problems/maximum-subarray///

// var maxSubArray = function(nums) {
//     let maxNum = Math.max(...nums);
//     for(let i = 0;i < nums.length; i++){
//         let nextNum = nums[i]
//         let subMaxNum; 
//         for(let j = i + 1;j < nums.length;j++){
//             const nuum = subMaxNum ? subMaxNum : nextNum
//             nextNum += nums[j]
//             nuum > nextNum ? subMaxNum = nuum : subMaxNum = nextNum
            
//         }
//         subMaxNum > maxNum ? maxNum = subMaxNum : maxNum = maxNum
//     }
//     return maxNum
// };
// maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

const maxSubArray = (nums) => {
    let maxTotal = nums[0],
        sum = 0;
    for(let i of nums) {
        sum += i;
        if(maxTotal < sum) {
            maxTotal = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return maxTotal;
};

