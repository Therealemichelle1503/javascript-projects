console.log(">>>>>>Rectangle<<<<<<");

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
  console.log(makeLine(5));

  console.log(">>>>>>Square<<<<<<");

  function makeSquare(width, height) {
    let square = '';
    for (let i = 0; i < height; i++) {
        square += (makeLine(width)+ `\n`);
    }
    return square.slice(0, -1);
  }
  console.log(makeSquare(5, 5));

  console.log(">>>>>>More Rectangles<<<<<<");

  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
  console.log(makeRectangle(5, 3));

  console.log(">>>>>>Triangles<<<<<<");

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + `\n`);
    }
    return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5));

  console.log(">>>>>>SpaceLine<<<<<<");

  function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (let i = 0; i < numSpaces, numChars; i++) {
        spaceLine += (makeLine(numSpaces));
    }
    return spaceLine;
  }
  console.log(makeSpaceLine(3, 5));

  console.log(">>>>>>Isosceles Triangle<<<<<<")
 
  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
  console.log(makeIsoscelesTriangle(5));

