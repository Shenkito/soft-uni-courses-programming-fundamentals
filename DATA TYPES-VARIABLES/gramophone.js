function gramophone(bandName, albumName, songName) {
    
    let bandLength = bandName.length;
    let albumLength = albumName.length;
    let songLength = songName.length;

    let duration = (albumLength * bandLength) * songLength / 2;
    console.log(`The plate was rotated ${(Math.ceil(duration / 2.5))} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');