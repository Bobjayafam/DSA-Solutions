// a - array, d - number of rotations
function rotLeft(a, d)
{
    for(let i = 0; i < d; i++){
      let firstItem = a.shift();
      a.push(firstItem);
    }
    return a;
}
  