const users = [
    {
        name:'lol',
        age:10
    },
    {
        name:'lol1',
        age:46
    },
    {
        name:'lol2',
        age:9
    }
]

const getKey = (age) => `${age - (age%10)}-${age - (age%10) + 9}`;

const groupByAge = users.reduce( (p,c) =>  ({...p, [getKey(c.age)]:[...(p[getKey(c.age)] || []),c] }),{})

console.log(groupByAge)
