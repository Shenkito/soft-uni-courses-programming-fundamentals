function songs(input) {
    
    class Songs {
        constructor(type, name, time) {
            this.type = type,
            this.name = name,
            this.time = time
        }
    }

    let countSongs = input.shift();
    let typeSong = input.pop();


    for (let i = 0; i < countSongs; i++) {
        let [type, name, time] = input[i].split("_");
        let newSong = new Songs(type, name, time);

        if (typeSong === type) {
            console.log(newSong.name);
        } else {
            if (typeSong === "all") {
                console.log(newSong.name);
            }
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );
console.log("================");
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );
console.log("==================");
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );