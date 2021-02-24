const persons = [
    {
        name: 'Harini',
        gender: 'female',
        age: '1',
    },
    {
        name: 'Geetha',
        gender: 'feemale',
        age: '45',
    },
    {
        name: 'Sachin',
        gender: 'male',
        age: '25',
    },
    {
        name: 'Rahul',
        gender: 'male',
        age: '90',
    },
    {
        name: 'Gill',
        gender: 'male',
        age: '29',
    },
    {
        name: 'Raina',
        gender: 'female',
        age: '65',
    },
    {
        name: 'Savitha',
        gender: 'feemale',
        age: '69',
    },
    {
        name: 'Aravind',
        gender: 'male',
        age: '23',
    },
    {
        name: 'Ajith',
        gender: 'male',
        age: '24',
    },
    {
        name: 'Mohan',
        gender: 'male',
        age: '29',
    },
    {
        name: 'Krishnan',
        gender: 'male',
        age: '65',
    }
];

const findAgeRange = (age) => {
    let ageRange = '0-10';

    if(age > 10 && age <= 20) {
        ageRange = '10-20'
    } else if(age > 20 && age <= 30) {
        ageRange = '20-30';
    } else if(age > 30 && age <= 40) {
        ageRange = '30-40';
    } else if(age > 40 && age <= 50) {
        ageRange = '40-50';
    } else if(age > 50 && age <= 60) {
        ageRange = '50-60';
    } else if(age > 60 && age <= 70) {
        ageRange = '60-70';
    } else if(age > 70 && age <= 80) {
        ageRange = '70-80';
    } else if(age > 80 && age <= 90) {
        ageRange = '80-90';
    } else if(age > 90 && age <= 100) {
        ageRange = '90-100';
    }

    return ageRange;
}

const personsAgeGroup = persons.reduce((pre, cur) => {
    const ageRange = findAgeRange(cur.age);
    return !pre.hasOwnProperty(ageRange) ? Object.assign(pre, {[ageRange]: [cur]}) : Object.assign(pre, {[ageRange]: [...pre[ageRange], cur]});
},{});

console.log(personsAgeGroup);