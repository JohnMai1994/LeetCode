// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
//
//  
//
// 示例：
//
// s = "leetcode"
// 返回 0
//
// s = "loveleetcode"
// 返回 2


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const n = s.length;
    const map = new Map();

    if (n <= 0) {
        return -1;
    }

    for (let i = 0; i < n ; i++ ){
        if (map.has(s[i])) {
            map.set(s[i], -1)
        } else {
            map.set(s[i], i);
        }
    }

    for (let pos of map.values()) {
        if (pos !== -1 ){
            return pos
        }
    }

    return -1

};

console.log(firstUniqChar("loveleetcode"));