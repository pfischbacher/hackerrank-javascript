// Complete the luckBalance function below.
function luckBalance(k, contests) {
  let result = 0;
  let importantContests = new Array();
  
  for (let contest of contests) {
    if (contest[1]) {
      importantContests.push(contest[0]);
    } else {
      result += contest[0];
    }
  }

  importantContests = importantContests.sort((a,b) => a-b);

  for (let i = 0; i < importantContests.length; i++) {
    if (i < importantContests.length - k) {
      result -= importantContests[i];
    } else {
      result += importantContests[i];
    }
  }

  return result;

}
