const resources = [
  {
    id: 1,
    name: 'Resource #1',
    startDate: '20220101',
    endDate: '20220102',
    type: 'campaign',
    region: 'eu',
    code: 'uk_1111',
  },
  {
    id: 2,
    name: 'Resource #2',
    startDate: '20220102',
    endDate: '20220103',
    type: 'order',
    region: 'na',
    code: 'usa_2222',
  },
  {
    id: 3,
    name: 'Resource #3',
    startDate: '20220103',
    endDate: '20220104',
    type: 'order',
    region: 'na',
    code: 'usa_3333',
  },
  {
    id: 4,
    name: 'Resource #4',
    startDate: '20220104',
    endDate: '20220105',
    type: 'campaign',
    region: 'eu',
    code: 'es_4444',
  },
  {
    id: 5,
    name: 'Resource #5',
    startDate: '20220105',
    endDate: '20220106',
    type: 'order',
    region: 'eu',
    code: 'it_5555',
  },
  {
    id: 6,
    name: 'Resource #6',
    startDate: '20220106',
    endDate: '20220107',
    type: 'campaign',
    region: 'eu',
    code: 'mk_1111',
  },
  {
    id: 7,
    name: 'Resource #7',
    startDate: '20220107',
    endDate: '20220108',
    type: 'order',
    region: 'apac',
    code: 'cn_7777',
  },
  {
    id: 8,
    name: 'Resource #8',
    startDate: '20220108',
    endDate: '20220109',
    type: 'campaign',
    region: 'eu',
    code: 'mk_8888',
  },
  {
    id: 9,
    name: 'Resource #9',
    startDate: '20220109',
    endDate: '20220110',
    type: 'order',
    region: 'apac',
    code: 'au_9999',
  },
  {
    id: 10,
    name: 'Resource #10',
    startDate: '20220110',
    endDate: '20220111',
    type: 'order',
    region: 'latam',
    code: 'mx_1010',
  },
  {
    id: 11,
    name: 'Resource #11',
    startDate: '20220110',
    endDate: '20220111',
    type: 'campaign',
    region: 'latam',
    code: 'mx_2332',
  },
];

// prvo - ifiltriraj po type

function filterByType(arrRes, type) {
  const newArr = arrRes.filter((elem) => elem.type === type);
  return newArr;
}

//console.log(filterByType(resources, 'campaign'));

// vtoro - napravi mapa spored region

// function filterAndMap(arrRes, type) {
//   const result = arrRes
//     .filter((elem) => elem.type === type)
//     .reduce((r, obj) => {
//       const { id, name, startDate, endDate, type, region, code } = obj;
//       r[region] = [
//         ...(r[region] || []),
//         { id, name, startDate, endDate, code },
//       ];
//       return r;
//     }, {});

//   return result;
// }

// treto - napravi izmeni vo noviot objekt

function filterAndMap(arrRes, str_type) {
  const result = arrRes
    .filter((elem) => elem.type === str_type)
    .reduce((r, obj) => {
      const { id, name, startDate, endDate, type, region, code } = obj;
      const str = code.split('_'); // '1111'
      str[0] = str[0].toUpperCase(); // 'UK'
      const countryValue = str[0];
      // obj['country'] = countryValue;
      // const { country} = obj;
      const newObj = {
        id,
        name,
        [`${str_type}_id`]: str[1],
        country: str[0],
        startDate,
        endDate,
      };

      r[region] = [...(r[region] || []), newObj];
      return r;
    }, {});

  return result;
}

console.log(filterAndMap(resources, 'campaign'));
