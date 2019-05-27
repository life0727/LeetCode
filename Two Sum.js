//原题1：https://leetcode.com/problems/two-sum/

// var twoSum = function(nums, target) {
//     let res = [];
//     for(let i = 0;i < nums.length;i++){
//         for(let j = i + 1;j < nums.length;j++){
//             if(nums[i] + nums[j] == target){
//                 res[0] = i;
//                 res[1] = j;
//                 return res
//             }
//         }
//     }

    
// };
// //twoSum([2,5,5,11],10)
// //twoSum([3,2,4],6)


var twoSum = function(nums, target) {
    if (nums.length < 2) return [];
    let res = {};
    for(let i = 0;i < nums.length;i++){
        let diff = target - nums[i];
        if(res[diff]) return [res[diff],i]
        res[nums[i]] = i;
    }
}
console.log(twoSum([3,2,4],6))