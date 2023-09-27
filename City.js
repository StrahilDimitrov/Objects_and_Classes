function solve(city) {

    let loopObject = Object.keys(city);

    for (const keys of loopObject) {
        console.log(`${keys} -> ${city[keys]}`);
    }
}
solve(
    {
        name: "Plovdiv",
        area: 389,
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
    }
)