
function groupByAge(users) {
  return users.reduce((acc, curr) => {
    const tensDigit = Math.floor(curr.age / 10); // get tens or above digits
    const key = `[${tensDigit}0 - ${tensDigit}9]`;
    return {
      ...acc,
      ...(
        acc[key] ?
          { [key]: [...acc[key], curr] } :
          { [key]: [curr] }
      )
    }
  }, {});
}

const users = [
  {
    name: 'A',
    age: 23
  },
  {
    name: 'B',
    age: 44
  },
  {
    name: 'C',
    age: 25
  },
  {
    name: 'D',
    age: 50
  },
  {
    name: 'E',
    age: 39
  },
];

console.log(groupByAge(users))
