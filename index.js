function computeMinFlights(array) {

  const N = array.length;
  if (N == 1) {
    return 1;
  }
  let planes = 0;
  if (array[0] === 0) {
    return -1;
  }

  let visited = {};
  array.forEach((item, index) => visited[index] = false);
  checkPosition(0);

  function checkPosition(position) {
    visited[position] = true;
    if (position < 0) {
      planes = -1;
      return;
    }
    if (position >= (N - 1)) {
      return;
    }
    let fuel = array[position];
    if (fuel < 1) {
      checkPosition(position - 1)
    } else {
      if (visited[position + fuel]) {
        checkPosition(position - 1)

      } else {
        planes++;
        checkPosition(position + fuel);
      }
    }

  }
  return planes;

}
/* const array = [2, 1, 2, 3, 1]; */
/* const array = [5, 9, 2, 0, 0, 0, 0]; */
const array = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(computeMinFlights(array));
