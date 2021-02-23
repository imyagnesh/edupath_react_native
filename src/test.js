export const test = () => {
    console.log('hello');
}

export const test1 = () => {
    console.log('hello1');
}

const test3 = () => {
    console.log('hello2');
}

const test4 = () => {
    console.log('hello2');
}

const test2 = () => {
    test3();
    test4();
}

export default test2;
