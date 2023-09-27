function songs(inputArray) {

    let result = [];
    let numberSong = inputArray.shift();
    let typeSong = inputArray.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let index = 0; index < numberSong; index++) {
        let [typeList, name, time] = inputArray[index].split('_');
        let song = new Song(typeList, name, time);
        result.push(song);
    }

    if (typeSong === 'all') {
        result.forEach((el) => console.log(el.name));
    }
    else {
        let filtering = result.filter((el) => el.typeList === typeSong);
        filtering.forEach((el) => console.log(el.name));
    }
}
songs(
    [
        3,
        'favourite_DownTown_3:14',
        'favourite_Kiss_4:16',
        'favourite_Smooth Criminal_4:01',
        'favourite'
    ]
)