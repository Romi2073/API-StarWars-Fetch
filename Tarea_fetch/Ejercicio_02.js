const characterId= 9;

const url = `https://swapi.py4e.com/api/starships/${characterId}/`

fetch(url)
.then(response => response.json())

.then(data => {
    const{name, model, manufacturer, length, max_atmosphering_speed} = data;
    console.log("Name:", name);
    console.log("Modelo:", model);
    console.log("Fabricante:", manufacturer);
    console.log("Longitud:", length);
    console.log("Velocidad:", max_atmosphering_speed);
})

.catch(error => {
    console.error('Error', error); 
});