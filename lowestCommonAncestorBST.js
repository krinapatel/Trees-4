/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Time Complexity : O(n)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No

//Recursion Soltion
var lowestCommonAncestorBST = function(root, p, q) {
    if(p.val < root.val && q.val < root.val) return lowestCommonAncestorBST(root.left, p, q);
    else if(p.val > root.val && q.val > root.val) return lowestCommonAncestorBST(root.right, p, q);
    return root;
};

// Time Complexity : O(log n)
// Space Complexity : O(1)

//Non recursion Solution
var lowestCommonAncestorBST = function(root, p, q) {
    while(true) {
        if(p.val < root.val && q.val < root.val) root = root.left;
        else if(p.val > root.val && q.val > root.val) root = root.right;
        else return root;
    } 
};