/*
 * Complete the swapNodes function below.
 */
function swapNodes(indexes, queries) {
  const tree = new Tree();
  const results = [];
  tree.build(indexes);

  for (let query of queries) {
    tree.swapChildren(query);
    results.push(tree.inOrder(tree.root));
  }

  return results;
}

class Node {
  constructor (data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  swapChildren() {
    const tmpNode = this.left;
    this.left = this.right;
    this.right = tmpNode;
  }
}

class Tree {
  constructor() {
    this.root = new Node(1);
  }

  build(indexes) {
    let nodeArr = [this.root];
    for (let i = 0; i < indexes.length; i++) {
      let tmpNode = nodeArr.shift();
      if (indexes[i][0] !== -1) {
        tmpNode.left = new Node(indexes[i][0]);
        nodeArr.push(tmpNode.left);
      }
      if (indexes[i][1] !== -1) {
        tmpNode.right = new Node(indexes[i][1]);
        nodeArr.push(tmpNode.right);
      }
    }
  }

  swapChildren(level) {
    const nodeArr = [this.root, 's'];
    let depth = 1;
    while(nodeArr.length > 1) {
      const node = nodeArr.shift();
      if (node === 's') {
        depth++;
        nodeArr.push('s');
      } else {
        if (depth % level === 0) {
          node.swapChildren();
        }
        if (node.left) {
          nodeArr.push(node.left);
        }
        if (node.right) {
          nodeArr.push(node.right);
        }
      }
    }
  }

  inOrder(node) {
    let result = [];
    if(node !== null) {
      if (node.left) {
        result.push(...this.inOrder(node.left));
      }
      result.push(node.data);
      if (node.right) {
        result.push(...this.inOrder(node.right));
      }
    }

    return result;
  }

}
