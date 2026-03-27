const btn = document.querySelector("button");
const pre = document.querySelector("pre")
const map = L.map('map').setView([-34.6037, -58.3816], 20);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const marker = L.marker([-34.6037, -58.3816]).addTo(map);

marker.bindPopup('Estoy acá').openPopup();


btn.addEventListener('click', obtenerCoordenadas)
function obtenerCoordenadas(){

    if ('geolocation' in navigator) {
        console.log("Obteniendo coordenadas...")
        navigator.geolocation.getCurrentPosition(success, error)
    } else {
        pre.innerText = "Tu navegador no soporta geolocalización"
    }

    

}

function success(pos) {
    console.log(pos);
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    pre.innerText = `Latitud: ${latitude} & Longitud: ${longitude}`;
    const actual = L.marker([-34.6049, -58.446]).addTo(map);
    actual.bindPopup("Hola!").openPopup();
}

function error() {
    pre.innerText = "Ocurrió un error"
}