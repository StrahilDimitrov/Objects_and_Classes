function storeProvision(available, delivery) {

    const storedProduct = {};
    const availableLength = available.length;
    const deliveryLength = delivery.length;

    for (let index = 0; index < availableLength; index += 2) {
        const current = available[index];
        storedProduct[current] = Number(available[index + 1]);
    }

    for (let index = 0; index < deliveryLength; index += 2) {
        const current = delivery[index];
        if (!storedProduct.hasOwnProperty(current)){
            storedProduct[current] = 0;
        }

        storedProduct[current] += Number(delivery[index + 1]);
    }

    for (const element of Object.keys(storedProduct)) {
        console.log(`${element} -> ${storedProduct[element]}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)