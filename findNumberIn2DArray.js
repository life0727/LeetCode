//二维数组的查找 https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// [
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ]


//解法一 ： 暴力解法 直接遍历 或者扁平化遍历
// var searchMatrix = function(matrix, target) { //直接遍历  时间复杂度：O(m * n)
//     if(!matrix.length) return false;
//     for(let i = 0;i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length ; j++){
//             if(matrix[i][j] ==  target){
//                 return true
//             }
//         }
//     }
//     return false
// };

// var searchMatrix = function(matrix, target) { //扁平化遍历 时间复杂度：O(m * n )
//     if(!matrix.length) return false;
//     const res_arr = [].concat(...matrix.map(item => item))
//     return res_arr.includes(target) ?  true : false
// };



//解法二 ：利用每一行的头尾关系来过滤行 利用continue +  break 
var searchMatrix = function(matrix, target) { //时间复杂都 O(m + n)
    if(!matrix.length) return false;
    for(let i = 0; i < matrix.length ;i ++){
        const _len = matrix[i].length
        if(matrix[i][0] > target){
            break //如果每一行的起始位置都比target大 直接判定为false 因为每一行起始位置是当前行和当前列最小的
        }else if(matrix[i][_len - 1] < target){
            continue; //如果每一行的末尾位置都比target小 直接跳出当前行
        }else{
            if(matrix[i].includes(target)){
                return true;
            }
        }
    }
    return false
};



//解法三： 减而治之 突出搜索路径不回头
//从右上角的解法
var findNumberIn2DArray = function(matrix, target) {  //时间复杂 O(m + n)
    if(!matrix.length) return false
    let x = 0;
    let y = matrix[0].length - 1;
    while(x < matrix.length && y >= 0){ //截至条件x不能超过总行数 y不能超过总列数
        if(matrix[x][y] < target){ //此位置再往前的行都会比target小
            x++
        }else if(matrix[x][y] > target){ //此位置再往后的列都会比target大
            y--
        }else{
            return true
        }
    }
    return false
};
//坐下角的解法  逻辑同上
var findNumberIn2DArray = function(matrix, target) {
    if(!matrix.length) return false
    let x = matrix.length - 1;
    let y = 0;
    while(x >= 0 && y < matrix[0].length ){
        if(matrix[x][y] < target){
            y++
        }else if(matrix[x][y] > target){
            x--
        }else{
            return true
        }
    }
    return false
};