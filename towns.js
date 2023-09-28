function towns(inputArray) {

    for (let index = 0; index < inputArray.length; index++) {
        let current = inputArray[index];
        let townInfo = current.split(' | ');
        let name = townInfo[0];
        let latitude = Number(townInfo[1]).toFixed(2);
        let longitude = Number(townInfo[2]).toFixed(2);

        class Town {
            constructor(town, latitude, longitude) {
                this.town = town;
                this.latitude = latitude;
                this.longitude = longitude;
            }
        }

        let newTown = new Town(name, latitude, longitude);

        console.log(`{ town: '${newTown.town}', latitude: '${newTown.latitude}', longitude: '${newTown.longitude}' }`);
    }
}
towns(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]

)