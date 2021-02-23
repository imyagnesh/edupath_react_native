const p1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 1')
    }, 1000)
})

const p2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 2')
    }, 1500)
})

const loadData = async () => {
    try {
        console.time('promise')
        const result = await Promise.any([p1(), p2()])
        // const p1Result = await p1();
        // const p2Result = await p2();
        console.timeEnd('promise');
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

loadData();
