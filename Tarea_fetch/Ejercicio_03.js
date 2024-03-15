const characterId= 3;

const url = `https://swapi.py4e.com/api/planets/${characterId}/`

fetch(url)
.then(response => response.json())

.then(data => {
    const{name, climate, terrain, population} = data;
    console.log("Name:", name);
    console.log("Clima:", climate);
    console.log("Terreno:", terrain);
    console.log("Población:", population);
})

.catch(error => {
    console.error('Error', error); 
});