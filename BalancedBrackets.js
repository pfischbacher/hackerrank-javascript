// Complete the isBalanced function below.
function isBalanced(s) {
  const check = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (check[s[i]]) {
      stack.push(s[i]);
    } else {
      if (check[stack.pop()] !== s[i]) {
        return 'NO';
      }
    }
  }
  if (stack.length) {
    return 'NO';
  }
  return 'YES';
}

