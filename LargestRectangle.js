// Complete the largestRectangle function below.
function largestRectangle(h) {
  let maxArea = 0;
  let currArea = 0;
  let stack = [];
  let stackTp = 0;
  h.push(0);
  
  let i = 0;
  while (i < h.length) {
    if (stack.length === 0 || h[stack[stack.length - 1]] <= h[i]) {
      stack.push(i);
      i++;
    } else {
      stackTp = stack.pop();
      let length = stack.length === 0 ? i : i - 1 - stack[stack.length - 1]
      currArea = h[stackTp] * length;
      maxArea = Math.max(maxArea, currArea);
    }
  }

  while (stack.length) {
    stackTp = stack.pop();
    let length = stack.length === 0 ? h.length - 1 : h.length - 1 - stack[stack.length - 1]
    currArea = h[stackTp] * length;
    maxArea = Math.max(maxArea, currArea);
  }
  
  return maxArea;
}
