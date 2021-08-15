// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

// Example


// Perform the following steps:

// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
// It took  swaps to sort the array.

function minimumSwaps(arr)
{
    let count = 0;
  // loop through the array
  // Check if the current item is in its correct position
  // if it is not, swap with the element in that position and increment count

  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== (i + 1)){
      const indexSwap = myIndexOf(arr, i+1);
      arr[indexSwap] = arr[i];
      arr[i] = i + 1;
      count++; 
    }
  }
  return count;
}

// Created this function because the solution was timing out on hackerrank when I used the native array indexOf
function myIndexOf(collection, target) {
    for(var val=0; val<collection.length; val++){
       if(collection[val] === target){
          return val;
        }
    }
}