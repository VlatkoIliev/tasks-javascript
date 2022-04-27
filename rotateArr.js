function rotate(niza, n) {
  const arr = [...niza];
  const len = arr.length;
  // rotate right
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      const elem = arr.pop();
      arr.unshift(elem);
    }
    return arr;
  }
  // rotate left
  else if (n < 0) {
    for (let i = 0; i < -n; i++) {
      const elem = arr.shift();
      arr.push(elem);
    }
    return arr;
  } else {
    return arr;
  }
}

const niza = ['1', '2', '3'];
console.log(rotate(niza, 2));
const niza2 = ['1', '2', '3', '4', '5'];
console.log(rotate(niza2, -3));
