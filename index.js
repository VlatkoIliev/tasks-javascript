const cars = [
  {
    make: 'audi',
    model: 'r8',
    year: '2012',
  },
  {
    make: 'audi',
    model: 'rs5',
    year: '2022',
  },
  {
    make: 'ford',
    model: 'focus',
    year: '2012',
  },
  {
    make: 'ford',
    model: 'fiesta',
    year: '2000',
  },
  {
    make: 'kia',
    model: 'optima',
    year: '2012',
  },
];

// prv nacin !

// const result = cars.reduce(function (r, a) {
//   r[a.make] = r[a.make] || [];
//   r[a.make].push(a);
//   return r;
// }, Object.create(null));
// console.log(result);

// vtor nacin

const result = cars.reduce((r, car) => {
  const { model, year, make } = car; // destructuring of car object
  r[make] = [...(r[make] || []), { model, yearOfmanu: year }];
  return r;
}, {});
console.log(result);
