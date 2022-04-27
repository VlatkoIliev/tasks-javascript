function transformObj(str_type) {
  const obj = {
    id: 1,
    name: 'Resource#1',
    startDate: '2022',
    endDate: '2023',
    type: 'campaign',
    region: 'eu',
    code: 'uk_1111',
  };

  const { id, name, startDate, endDate, type, region, code } = obj;
  const str = code.split('_');
  str[0] = str[0].toUpperCase();
  const newObj = {
    id,
    name,
    [`${str_type}_id`]: str[1],
  };

  return newObj;
}

console.log(transformObj('campaign'));
