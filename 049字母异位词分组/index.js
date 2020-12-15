// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
//
// 示例:
//
//     输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
//     [
//         ["ate","eat","tea"],
//         ["nat","tan"],
//         ["bat"]
//     ]
// 说明：
//
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
//

/**
 * @param {string[]} strs
 * @return {string[][]}
 */


 /*
		思路：
		1. 用for loop 获取strs字符串数组中的每个str -> 把str转换成Array进行排序   array = Array.from(str)  array.sort
		2. 把已经排序好的Array再变成字符串，作为Key值在Map中寻找。 如果存在这个key值的数组，返回该数组，否则新建一个新数组
		3. list.push(str)到获取到的数组之中， 更新Map中的数组
		4. 返回Array.form(map.values()),这样可以去除key值 
				Array.form(map.values()): [[value], [value], [value]]
				Array.form(map)			: [[key, value], [key, value], [key, value]]
		
 */

const input = ["eat", "tea", "tan", "ate", "nat", "bat"]

var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str)
        array.sort()
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : [];
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values())
};

console.log(groupAnagrams(input));