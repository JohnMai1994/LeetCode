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