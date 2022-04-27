function splitStr(par) {
  const result = par.split('_');
  result[0] = result[0].toUpperCase();
  return result;
}

console.log(splitStr('uk_1111'));
