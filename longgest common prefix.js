//原题14：https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function(strs) {
    const arr = []
    strs.forEach(element => {
        arr.push(element.length)
    });
    minl = Math.min(...arr);
    const firststr = strs.filter(item => item.length === minl)
    //console.log(firststr)
    // for(let i = minl;i >= 0;i--){
    //     for(let j = 0; j < strs.length ; j++){
    //         if(firststr[0].substring(0,i) === strs)
    //     }
    //     if(strs.filter(item => item.substring(0,i) === firststr[0].substring(0,i)) !== '')
    //     console.log()
    // }
   
};

longestCommonPrefix(["flower","flow","flight"])