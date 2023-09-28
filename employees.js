function employees(inputArray) {

    for (let index = 0; index < inputArray.length; index++) {
        let currentPerson = inputArray[index];

        console.log(`Name: ${currentPerson} -- Personal Number: ${currentPerson.length}`);
    }
}
employees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]

)

// Use object
function solve(input) {

    for(let index = 0; index < input.length; index++){
        let current = input[index];

        let person = {
            name: current,
            nameLenght: current.length
        }

        console.log(`Name: ${person.name} -- Personal Number: ${person.nameLenght}`);
    }
}
solve(
    [
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
    ]
)