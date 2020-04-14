// https://www.quora.com/What-is-the-logic-used-in-the-HackerRank-Maximise-Sum-problem
// Version 1
// Complete the maximumSum function below.
function maximumSum(a, m) {
  let min = m;

  let b = new Array();
  b[0] = {
    index: 0,
    value: a[0] % m
  };

  for (let i = 1; i < a.length; i++) {
    let bValue = (b[i - 1].value + a[i] % m) % m;
    b[i] = {
      index: i,
      value: bValue
    };
  }

  b.sort((a, b) => {
    if (a.value === b.value) {
      return a.index - b.index;
    } else {
      return a.value - b.value
    }
  });

   for (let i = 0; i < b.length - 1; i++) {
    if (b[i].index > b[i + 1].index) {
      let value = b[i + 1].value - b[i].value;
      min = Math.min(min, value);
    }
    if (min === 1) {
      return m - min;
    }
  }

  return Math.max(m - min, b[b.length - 1].value);
}

// Version with BST, but BST timesout in 3 tests.
// Complete the maximumSum function below.
function maximumSum(a, m) {
  let min = m;

  let b = new Array();
  if (a.length > 50000) {
    b[0] = {
      index: 0,
      value: a[0] % m
    };

    for (let i = 1; i < a.length; i++) {
      let bValue = (b[i - 1].value + a[i] % m) % m;
      b[i] = {
        index: i,
        value: bValue
      };
    }

    b.sort((a, b) => a.value - b.value);
  } else {
    let tree = new Tree();
    tree.buildTree(a, m);
    b = tree.flatten();
  }

   for (let i = 0; i < b.length - 1; i++) {
    if (b[i].index > b[i + 1].index) {
      let value = b[i + 1].value - b[i].value;
      min = Math.min(min, value);
    }
    if (min === 1) {
      return m - min;
    }
  }

  return Math.max(m - min, b[b.length - 1].value);
}

class Node {
  constructor(data) {
    this.data = {
      index: data.index,
      value: data.value,
    }
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data.value < this.data.value) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(arr = [], m) {
    let b = new Array();
    b[0] = arr[0] % m;
    this.root = new Node({index:0, value:b[0]});
    for (let i = 1; i < arr.length; i++) {
      b[i] = (b[i - 1] + arr[i] % m) % m;
      this.root.insert({index: i, value:b[i]});
    }
  }

  flatten() {
    // Use InOrder
    const results = [];
    const stack = [];
    let current = this.root;

    while(current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();

      results.push(current.data);

      current = current.right;
    }

    return results;
  }
}
