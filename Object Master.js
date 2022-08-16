
const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


//id is evenly divisible by 3
const evens = pokémon.filter( value => value.id % 3 === 0 );
console.log(evens);

//objects that are "fire" type
const bListPkmn = pokémon.filter( p => p.types[0] === "fire" );
console.log(bListPkmn);

//objects that have more than one type
const poke = pokémon.filter(item => item.types.length > 1);
   console.log(poke);

//names of the pokémon
const poke1 = pokémon.map(item => item.name);
console.log(poke1);

// names of pokémon with an id greater than 99
const poke2 = pokémon.filter(item => item.id > 99).map(item => item.name);
console.log(poke2);

// whose only type is poison
const poke3 = pokémon.filter(item => item.types.includes('poison')).map(item => item.name);
console.log(poke3);

// pokémon whose second type is "flying"
const poke4 = pokémon.filter(item => item.types[1] == "flying").map(item => item.types[0])
console.log(poke4);

//pokémon that are "normal" type
const poke5 = pokémon.filter(item => item.types.includes("normal")).length;
console.log(poke5);
