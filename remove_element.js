//原题27：https://leetcode.com/problems/remove-element/submissions/

//循环遍历过滤的时候 splice(i,1),i要--
var removeElement = function(nums, val) {
    var n = 0;
    for (let i= 0; i < nums.length; i++) {
      if(nums[i] != val){
        nums[n] = nums[i]
        n++
      }
    }
    return n
}
  console.log(removeElement([3,2,2,3],3))


var removeElement = function(nums, val) {
  for(let i = 0 ;i < nums.length; i++){
    if(nums[i] == val){
      nums.splice(nums.indexOf(nums[i]),1);
      i-- //i-- 是真的坑记住。。
    }
  }
  return nums
}
console.log(removeElement([3,2,2,3],3))