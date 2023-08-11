export let moving = []


function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
        callback(true);
    } else {
        img.onload = () => {
            callback(true);
        };

        img.onerror = () => {
            callback(false);
        };
    }
}



checkIfImageExists(`'url(./images/${booklists[3].photo})'`, (exists) => {
    if (exists) {
        console.log('Image exists. ')
    } else {
        console.error('Image does not exists.')
    }
});