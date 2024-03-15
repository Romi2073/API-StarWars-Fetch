const characterId= 4;

const url = `https://swapi.py4e.com/api/people/${characterId}/`

fetch(url)
.then(response => response.json())

.then(data => {
    const{name, height, mass, hair_color} = data;
    console.log("Name:", name);
    console.log("Height:", height);
    console.log("Mass:", mass);
    console.log("Hair color:", hair_color);
})

.catch(error => {
    console.error('Error', error); 
});