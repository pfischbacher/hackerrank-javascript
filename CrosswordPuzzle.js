function crosswordPuzzle(crossword, hints) {
  let words = [];
  let grid = crossword;
  //hintsArr = hints.split(';').sort((a,b) => b.length - a.length);
  hintsArr = hints.split(';');
  for (hint of hintsArr) {
    console.log(hint, hint.length);
  }

  let i = 0;

  while (i < 10) {
    let j = 0;
    while (j < 10 && crossword[i][j] ) {
      if (crossword[i][j] === '-') {
        if 
        for (let hint of hintsArr) {
          grid = testHint(hint, crossword, i, j);
        }
      }
    }

  }
}


function checkRow(crossword, i, j) {
  let length = 0;
  while (crossword[i][j] && crossword[i][j] === '-') {
    i++;
    length++;
  }

  return length > 1 ? length : 0;

}

function checkColumn(crossword, i, j) {
  let length = 0;
  while (crossword[i][j] && crossword[i][j] === '-') {
    j++;
    length++;
  }

  return length;
}


sampleData = {
  data:
  [
    '+-++++++++',
    '+-++++++++',
    '+-++++++++',
    '+-----++++',
    '+-+++-++++',
    '+-+++-++++',
    '+++++-++++',
    '++------++',
    '+++++-++++',
    '+++++-++++',
  ],
  hints:'LONDON;DELHI;ICELAND;ANKARA;'
};


crosswordPuzzle(sampleData.data, sampleData.hints);
