//原题14：https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return ''
    let res = '';
    const short = strs.reduce((a,b) => a.length <= b.length ? a : b)
    //console.log(short)
    // const arr = []
    // strs.forEach(element => {
    //     arr.push(element.length)
    // });
    // minl = Math.min(...arr);
    // const firststr = strs.filter(item => item.length === minl)
    //console.log(firststr)
    // for(let i = minl;i >= 0;i--){
    //     for(let j = 0; j < strs.length ; j++){
    //         if(firststr[0].substring(0,i) === strs)
    //     }
    // }
    for(let i = short.length;i >= 0;i--){
        if(strs.every(item => item.substring(0,i) == short.substring(0,i))){
            res = short.substring(0,i);
            return res
        }

    }
    
    return res
   
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
