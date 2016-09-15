function bubbleSort(array){
  if (array.length === 0){
    return [];
  }

for (var j = 0; j < array.length -1; j++) {
  for (var i = 0; i < array.length -1 ; i++) {
    firstElementInArray = array[i];
    subsequentElementInArray = array[i + 1];

    if (firstElementInArray < subsequentElementInArray) {
      var smaller = firstElementInArray;
      var larger = subsequentElementInArray;
    } else {
      var smaller = subsequentElementInArray;
      var larger = firstElementInArray;
    }

    array[i] = smaller;
    array[i + 1] = larger;
    }
  }
  return array;
}

function split(wholeArray){
  var midPoint = Math.ceil(wholeArray.length / 2);
  firstHalf = wholeArray.slice(0, midPoint)
  secondHalf = wholeArray.slice(midPoint)
  return [firstHalf, secondHalf];
}

function mergeSort(array){
  firstArray = array[0];
  secondArray = array[1];
  newArray = [];

  firstArray.length > secondArray.length ? longestArrayLength = firstArray.length : longestArrayLength = secondArray.length;
  for (var i = 0; i < longestArrayLength; i++) {
    if (firstArray[0] > secondArray[0]) {
      newArray.push(secondArray[0]);
      secondArray.shift([0])
    } else {
      newArray.push(firstArray[0])
      firstArray.shift([0])
    }
  }
  return newArray;
}
