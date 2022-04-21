// Time Complexity : O(n)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No

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

//Recursion Solution

 let pathP;
 let pathQ;
 var recursion = function(root, p, q, path) {
     //base case
     if(root === null) return null;
     //logic
     if(p.val === root.val) {
         pathP = [...path];
         pathP.push(p);
         pathP.push(p);
     }
     if(q.val === root.val) {
         pathQ = [...path];
         pathQ.push(q);
         pathQ.push(q);
     }
         
     //action
     path.push(root);
     
     //recursion
     if(pathP.length === 0 || pathQ.length === 0) recursion(root.left, p, q, path);
     if(pathP.length === 0 || pathQ.length === 0) recursion(root.right, p, q, path);
     
     //backtrack
     path.pop();
 }
 
 var lowestCommonAncestor = function(root, p, q) {
     pathP = [];
     pathQ = [];
     recursion(root, p, q, []);
     for(let i = 0; i < pathP.length; i++) {
         if(pathP[i] !== pathQ[i]) return pathP[i-1];
     }
     return null;
 };