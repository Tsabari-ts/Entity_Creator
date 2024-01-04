"use strict";

function SendCoordinates() {
    let name = document.getElementById('name').value;
    let longitude = parseFloat(document.getElementById('longitude').value);
    let latitude = parseFloat(document.getElementById('latitude').value);

    console.log('Name:', name, 'Longitude:', longitude, 'Latitude:', latitude);

    let url = "http://localhost:57801/coordinates/trythis";
    let data = { Name: name, Longitude: longitude, Latitude: latitude };

    CallApi(url, data);
}


function CallApi(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}