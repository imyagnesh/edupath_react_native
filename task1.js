let arr = [ {age: 10}, {age: 11}, {age: 20}, {age: 29}, {age: 40}, {age:50}, {age : 55}];

// does not work for negative values.
let ans = arr.reduce( (p, c) => {
	let key = `${c.age - (c.age%10)} - ${c.age - (c.age%10) + 9}`;
	if (!p[key]) {
  	p[key] = [];
  }
  
  p[key].push(c);
  
  return p;
  
}, {} );

console.log(ans);
