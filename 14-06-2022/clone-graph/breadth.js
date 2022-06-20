/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * 
 * [[2,4],[1,3],[2,4],[1,3]]
 * 
 * val 1 
 * list 2,4
 * 
 * val 2 
 * list 1,3
 * 
 * val 3
 * list 2,4
 * 
 * val 4
 * list 1,3

 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {

    if (!node)
        return node;

    const visited = new Map();

    const dfs = (currentNode) => {
        if (visited.has(currentNode.val))
            return visited.get(currentNode.val);

        const copyNode = new Node(currentNode.val);

        visited.set(currentNode.val, copyNode);

        for (const c of currentNode.neighbors) {
            copyNode.neighbors.push(dfs(c));
        }

        return copyNode;
    }

    return dfs(node);
};