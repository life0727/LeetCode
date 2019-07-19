//原题23：https://leetcode.com/problems/merge-k-sorted-lists/

//深度递归遍历返回一个对象且变量都在一个函数中
//递归有截止条件的时候要加return
//生成嵌套json数据对象利用arr逐级保存（文超大神）。。
var mergeKLists = function(lists) {
    if(!lists.length) return null

    let resArr = [];
    function deepArr(obj,arr = []){
        arr.push(obj.val);
        if(obj.next == null)  return arr;
        arr = [...arr,...deepArr(obj.next)]
        return arr
    };
   
    for(let i of lists){
        if(i) resArr = [...resArr,...deepArr(i)].sort((a,b) => a-b);
    }
    if (!resArr.length) return null
    const arr = [];
    for(let i = resArr.length - 1;i >= 0 ;i--){
       let obj = Object.assign({},{'val':resArr[i],'next':arr[0] || null})
       arr.unshift(obj)
    }
    return arr[0]
  
};
const inp = [
    {
        val: 1,
        next: { 
            val: 4,
            next:{
                val: 5, 
                next: null 
                }
            } 
    },{
        val: 1,
        next: { 
            val: 3,
            next:{
                val: 4, 
                next: null 
                }
            } 
    },{
        val: 2,
        next: { 
            val: 6,
            next:null
            } 
    }
   
]
console.log(mergeKLists(inp))