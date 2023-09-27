function convert(input) {

    let result = JSON.parse(input);
    let newObj = Object.keys(result);

    for (const element of newObj) {
        console.log(`${element}: ${result[element]}`);
    }
}

convert(
    '{"name": "George", "age": 40, "town": "Sofia"}'
)