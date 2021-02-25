// Sumit Singh
// sumit.singh@hsc.com

// input
const users = [{
        name: 'virat',
        gender: 'male',
        age: 30
    },
    {
        name: 'anushka',
        gender: 'female',
        age: 29
    },
    {
        name: 'rohit',
        gender: 'male',
        age: 31
    },
    {
        name: 'deepika',
        gender: 'female',
        age: 32
    },
    {
        name: 'baby',
        gender: 'male',
        age: 0
    },
    {
        name: 'teen',
        gender: 'female',
        age: 10
    },
    {
        name: 'adult',
        gender: 'male',
        age: 18
    },
    {
        name: 'old',
        gender: 'female',
        age: 100
    }, {
        name: 'oldest',
        gender: 'female',
        age: 100646464600054
    }

];


function getAgeGrpFromAgeNum(intAge) {
    strAge = new String(intAge);
    if (intAge % 10 === 0) {
        return strAge.concat('-').concat(intAge + 9);
    } else {
        start = strAge.slice(0, -1) + '0';
        var ageGrp = start.concat('-').concat(new Number(start) + 9);
        return ageGrp;
    }
}


// Reduce function
const groupByAge = users.reduce((p, c) => {
    ageGroup = getAgeGrpFromAgeNum(c.age);
    (p[ageGroup] = p[ageGroup] || []).push(c);
    return p;
}, []);

// Result
console.log(groupByAge);