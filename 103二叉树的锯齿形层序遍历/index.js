// 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
//
// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层序遍历如下：
//
// [
//     [3],
//     [20,9],
//     [15,7]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }

    const ans = [];
    const nodeQueue = [root];

    let isOrderLeft = true;

    while (nodeQueue.length) {
        let levelList = [];
        const size = nodeQueue.length;
        for (let i = 0; i < size; ++i) {
            const node = nodeQueue.shift();
            if (isOrderLeft) {
                levelList.push(node.val);
            } else {
                levelList.unshift(node.val);
            }
            if (node.left !== null) {
                nodeQueue.push(node.left);
            }
            if (node.right !== null) {
                nodeQueue.push(node.right);
            }
        }
        ans.push(levelList);
        isOrderLeft = !isOrderLeft;
    }

    return ans;

};


//根据一个二叉树的先序遍历的结果，创建二叉树
function createTree_preOrder(preOrderArr){
    //a、递归的结束条件：叶子节点
    //b、递归的递推表达式（节点之间的关系）：根左右
    //c、递归的返回值：创建好的树或者子树
    let root=null;
    if(preOrderArr[0]!==undefined){
        //（1）拿到先序序列 的头部的值a
        let nodeVal=preOrderArr.shift();

        //不是叶子节点，才有必要进行创建子树的操作
        if(nodeVal!='#'){
            //（2）
            //a、创建根节点（需要节点的值：就是值啊）
            root=new TreeNode(nodeVal);
            //b、递归的创建左子树
            root.left=createTree_preOrder(preOrderArr);
            //c、递归的创建右子树
            root.right=createTree_preOrder(preOrderArr);
        }
    }
    return root;
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(zigzagLevelOrder(root))


