function person(name, family, year) {

    let result = {
        firstName: name,
        lastName: family,
        age: year
    };

    return result;
}
console.log(person('Peter', 'Pan', 20));