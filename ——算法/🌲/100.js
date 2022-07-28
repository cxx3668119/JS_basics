/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (q == null && p == null) return true
    if (q == null || p == null) return false
    if (q.val != p.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
