describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

xdescribe('Bubble Sort', function(){
  it('handles only integers', function(){
    expect( bubbleSort(['potato']) ).toEqual('The Array is attempting to sort invalid data');
  });
});

describe('Bubble Sort', function() {
  it('sorts three numbers, from smallest to biggest', function(){
    expect(bubbleSort([18,3,2,1])).toEqual([1,2,3, 18]);
  });
});

describe('Bubble Sort', function() {
  it('sorts a larger set of numbers, from smallest to biggest', function(){
    expect(bubbleSort([10,9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([10,9,8,7,6,5,4,3,2,1])).toEqual([[10,9,8,7,6], [5,4,3,2,1]]);
    expect(split([11,10,9,8,7,6,5,4,3,2,1])).toEqual([[11,10,9,8,7,6], [5,4,3,2,1]]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    var array = [11,10,9,8,7,6,5,4,3,2,1]
    var arrayToBeMerged = split(array);
    expect(mergeSort(arrayToBeMerged)).toEqual([1,2,3,4,5,6,7,8,9,10, 11]);
  });
});
