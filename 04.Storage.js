function storage(input) {
    let map = new Map();
    for (const string of input) {
        let product = string.split(` `);
        let nameOfProduct = product[0];
        let quantity = Number(product[1]);

        if (!map.has(nameOfProduct)) {
            map.set(nameOfProduct, +quantity);
        } else {
            let curQuantity = map.get(nameOfProduct);
            let newQuantity = curQuantity += quantity;
            map.set(nameOfProduct, newQuantity);
        }
    }
    for (let final of map) {
        console.log(`${final[0]} -> ${final[1]}`);
    }

    console.log();
}
// storage(['tomatoes 10',
// 'coffee 5',
// 'olives 100',
// 'coffee 40']);
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);