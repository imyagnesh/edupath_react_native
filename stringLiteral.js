// string litrels

const firstName = "Yagnesh";
const lastName = "Modh";

const fullName = firstName +  " " + lastName;

console.log(fullName);

const html = '<!DOCTYPE html>' +
'\n<html lang="en">' +
'\n<head>' +
    '\n\t<meta charset="UTF-8">' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Document</title>' +
'</head>' +
'<body>' +
    '' +
'</body>' +
'</html>';

const html5 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`

console.log(html5);

console.log(html);

// string litrels

const firstName = "Yagnesh";
const lastName = "Modh";

// const fullName = firstName +  ' ' + lastName;
const fullName = `${firstName} ${lastName}`;

// yagnesh's car

// const poss = firstName + '\'s car';

const poss = `${firstName}'s car`

console.log(poss);

console.log(fullName);


const a = true;

console.log(typeof a);

const b = `${a}`;
console.log(typeof b);

// a.toString()


