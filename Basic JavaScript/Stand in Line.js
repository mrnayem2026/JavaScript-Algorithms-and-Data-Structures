// queue is an abstract Data Structure

function nextInLine(arr, item) {
  
    // one number add the end of the arr array and remove the first number from arr array
    
    arr.push(item); 
    return arr.shift();

  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));