// var maxArea = function(height) {
//   let lang = height.length-1;
//   let curArea = 0;
//   for(let i = 0;i < height.length;i++){
//     let gao = Math.min(height[i],height[lang])
//     let nextArea = gao * (lang - i)
//     curArea = Math.max(curArea,nextArea)
//     for(let j = lang;j > i;j--){
//       let gao1 = Math.min(height[i],height[j])
//       let nextArea1 = gao1 * (j - i)
//       curArea > nextArea1 ? curArea = curArea : curArea = nextArea1
//     }
//   }
//   return curArea
// };
// maxArea([2,3,4,5,18,17,6])

var maxArea = function(height) {
    let max_area = 0, left = 0, right = height.length - 1;
    while (left < right) {
        max_area = Math.max(max_area, Math.min(height[left], height[right]) * (right - left));
        height[left] < height[right] ? left++ : right--;
    }
    return max_area;
};