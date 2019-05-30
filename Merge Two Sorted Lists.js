//原题21：https://leetcode.com/problems/merge-two-sorted-lists/

//深度递归遍历返回一个对象且变量都在一个函数中
//生成嵌套json数据对象利用arr逐级保存（文超大神）。。
var mergeTwoLists = function(l1,l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    function deepArr(obj,arr = []){
        arr.push(obj.val);
        if(obj.next == null)  return arr;
        arr = [...arr,...deepArr(obj.next)]
        return arr
    };
    const resArr = [...deepArr(l1),...deepArr(l2)].sort((a,b) => a-b);
    const arr = [];
    for(let i = resArr.length - 1;i >= 0 ;i--){
       let obj = Object.assign({},{'val':resArr[i],'next':arr[0] || null})
       arr.unshift(obj)
    }
    return arr[0]
};
const l1 = {
    val: 1,
    next: { 
        val: 2,
        next:{
             val: 4, 
             next: null 
            }
        } 
    }

const l2 = {
    val: 1,
    next: { 
        val: 3,
        next:{
             val: 4, 
             next: null 
            }
        } 
    }
  console.log(mergeTwoLists(l1,l2))

  let something = {
                    val:1,
                    next:{
                        val:1,
                        next:{
                            val:2,
                            nxet:{
                                val:3,
                                next:{
                                    val:4,
                                    next:{
                                        val:4,
                                        next:null
                                    }
                                }
                            }
                        }
                    }
                }


//    var data = [
//     { id: 1, name: "办公管理", pid: 0 },
//     { id: 2, name: "请假申请", pid: 1 },
//     { id: 3, name: "出差申请", pid: 1 },
//     { id: 4, name: "请假记录", pid: 2 },
//     { id: 5, name: "系统设置", pid: 0 },
//     { id: 6, name: "权限管理", pid: 5 },
//     { id: 7, name: "用户角色", pid: 6 },
//     { id: 8, name: "菜单设置", pid: 6 },
//     ];
//     function toTree(data) {
//         // 删除 所有 children,以防止多次调用
//         data.forEach(function (item) {
//             delete item.children;
//         });
 
//         // 将数据存储为 以 id 为 KEY 的 map 索引数据列
//         var map = {};
//         data.forEach(function (item) {
//             map[item.id] = item;
//         });
// //        console.log(map);
//         var val = [];
//         data.forEach(function (item) {
//             // 以当前遍历项，的pid,去map对象中找到索引的id
//             var parent = map[item.pid];
//             // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
//             if (parent) {
//                 (parent.children || ( parent.children = [] )).push(item);
//             } else {
//                 //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
//                 val.push(item);
//             }
//         });
//         return val;
//     }
//     console.log(toTree(data))
