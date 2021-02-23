//Ankur Garg

//data
const users = [
{ name : 'virat',
    gender: 'male',
    age: 30
},
{ name : 'anushka',
    gender: 'female',
    age: 29
},
{ name : 'rohit',
    gender: 'male',
    age: 31
},
{ name : 'deepika',
    gender: 'female',
    age: 32
},
{ name : 'baby',
    gender: 'male',
    age: 0
},
{ name : 'teen',
    gender: 'female',
    age: 10
},
{ name : 'adult',
    gender: 'male',
    age: 18
},
{ name : 'old',
    gender: 'female',
    age: 100
},{ name : 'oldest',
gender: 'female',
age: 100646464600054
}

];


//function
function getAgeGroupFromNumber(intNumber){
    //var intNumber = 5646;
    strNumber = new String(intNumber);   
    
    //var len = Math.ceil(Math.log(number + 1) / Math.LN10);

    if( intNumber % 10 === 0 ){
        return strNumber.concat( '-').concat( intNumber +9);
    }else{

       start= strNumber.slice(0, -1) + '0';
      var grp =  start.concat( '-').concat(new Number(start) +9);
       return grp;
    }
}


//Reduce function
const groupByAge = users.reduce( (p,c) => {

    ageGroup = getAgeGroupFromNumber(c.age);

    (p[ageGroup]= p[ageGroup]|| []).push(c);
    return p;
},[]);

//Output
console.log(groupByAge);






// 
// const groupByGender = users.reduce( (p,c) => {
    

//     (p[c.gender] = p[c.gender] || []).push(c);

//     // if( !p[c.gender]){
//     //     p[c.gender] =[];  
//     // }
//     // p[c.gender].push(c);

//     return p;
//     // if( p[c.gender]){
//     //     return { ...p , [c.gender]: [...p[c.gender],c] };
//     // }else{
//     //     return {...p, [c.gender]:[c]};
//     // }


// },{} );

// //console.log(groupByGender);




// //console.log(users);

// // const arr = [1,2,3,4,5]
// // const filter = arr.reduce( (p,c,i) => {
// //     if( i % 2 ===0 ){
// //         return [...p,c]
// //     }
// //     return p;

// // },[])

// //console.log(filter);
