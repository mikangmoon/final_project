const pokemonDetails = {
    Lucario: {
        types: ["Fighting", "Steel"],
        description: "A versatile fighter with aura-sensing abilities, perfect for both physical and special attacks.",
        physical: "<ul><li>Height: 3'11\"</li><li>Weight: 119.0 lbs</li><li>Best Abilities: Steadfast, Inner Focus</li></ul>"
    },
    Garchomp: {
        types: ["Dragon", "Ground"],
        description: "A ferocious dragon with incredible speed and power, dominating in battles.",
        physical: "<ul><li>Height: 5'03\"</li><li>Weight: 209.4 lbs </li><li>Best Abilities: Sand Veil, Rough Skin</li></ul>"
    },
    Empoleon: {
        types: ["Water", "Steel"],
        description: "The emperor penguin Pokémon, offering strong defenses and water-based attacks.",
        physical: "<ul><li>Height: 5'03\" </li><li>Weight: 186.3 lbs </li><li>Best Abilities: Torrent, Competitive</li></ul>"
    },
    Infernape: {
        types: ["Fire", "Fighting"],
        description: "A blazing monkey with fiery punches, great for offensive strategies.",
        physical: "<ul><li>Height: 3'11\" </li><li>Weight: 121.3 lbs </li><li>Best Abilities: Blaze, Iron Fist</li></ul>"
    },
    Torterra: {
        types: ["Grass", "Ground"],
        description: "The continent Pokémon, providing solid defense and nature-based moves.",
        physical: "<ul><li>Height: 7'03\" </li><li>Weight: 683.4 lbs</li><li>Best Abilities: Overgrow, Shell Armor</li></ul>"
    },
    Weavile: {
        types: ["Dark", "Ice"],
        description: "A sneaky predator with sharp claws, excellent for priority moves and speed.",
        physical: "<ul><li>Height: 3'11\" </li><li>Weight: 75.0 lbs </li><li>Best Abilities: Pressure, Pickpocket</li></ul>"
    },
    Salamence: {
        types: ["Dragon", "Flying"],
        description: "A dragon with wings, offering high attack and the ability to fly.",
        physical: "<ul><li>Height: 4'11\" </li><li>Weight: 226.2 lbs</li><li>Best Abilities: Intimidate, Moxie</li></ul>"
    },
    Metagross: {
        types: ["Steel", "Psychic"],
        description: "A steel and psychic powerhouse, known for its immense strength and intelligence.",
        physical: "<ul><li>Height: 5'03\" </li><li>Weight: 1212.5 lbs </li><li>Best Abilities: Clear Body, Light Metal</li></ul>"
    },
    Luxray: {
        types: ["Electric", "Dark"],
        description: "A sleek and powerful electric lion, known for its speed and devastating electric attacks.",
        physical: "<ul><li>Height: 3'11\" </li><li>Weight: 92.6 lbs </li><li>Best Abilities: Rivalry, Intimidate</li></ul>"
    },
    Froslass: {
        types: ["Ice", "Ghost"],
        description: "A ghostly ice queen, perfect for freezing opponents and phasing through attacks.",
        physical: "<ul><li>Height: 3'03\" </li><li>Weight: 58.6 lbs </li><li>Best Abilities: Snow Cloak, Cursed Body</li></ul>"
    },
    Dialga: {
        types: ["Steel", "Dragon"],
        description: "The Temporal Pokémon, controller of time itself with powerful Dragon and Steel moves.",
        physical: "<ul><li>Height: 17'09\" </li><li>Weight: 1505.8 lbs </li><li>Best Abilities: Pressure, Telepathy</li></ul>"
    },
    Palkia: {
        types: ["Water", "Dragon"],
        description: "The Spatial Pokémon, master of space and dimensions with devastating spatial attacks.",
        physical: "<ul><li>Height: 13'09\" </li><li>Weight: 740.8 lbs </li><li>Best Abilities: Pressure, Telepathy</li></ul>"
    },
    Giratina: {
        types: ["Ghost", "Dragon"],
        description: "The Renegade Pokémon, guardian of the Reverse World with shadow-based powers.",
        physical: "<ul><li>Height: 14'09\" </li><li>Weight: 1433.0 lbs </li><li>Best Abilities: Pressure, Telepathy</li></ul>"
    },
    Uxie: {
        types: ["Psychic"],
        description: "The Knowledge Pokémon, one of the Lake Guardians granting wisdom and special abilities.",
        physical: "<ul><li>Height: 1'00\" </li><li>Weight: 0.7 lbs </li><li>Best Abilities: Levitate</li></ul>"
    },
    Mesprit: {
        types: ["Psychic"],
        description: "The Emotion Pokémon, another Lake Guardian that influences feelings and emotions.",
        physical: "<ul><li>Height: 1'00\" </li><li>Weight: 0.7 lbs </li><li>Best Abilities: Levitate</li></ul>"
    },
    Azelf: {
        types: ["Psychic"],
        description: "The Willpower Pokémon, the final Lake Guardian that controls willpower and minds.",
        physical: "<ul><li>Height: 1'00\" </li><li>Weight: 0.7 lbs </li><li>Best Abilities: Levitate</li></ul>"
    },
    Regigigas: {
        types: ["Normal"],
        description: "The Colossal Pokémon, an ancient giant with immense strength and the power to move continents.",
        physical: "<ul><li>Height: 12'02\" </li><li>Weight: 925.9 lbs </li><li>Best Abilities: Slow Start</li></ul>"
    },
    Cresselia: {
        types: ["Psychic"],
        description: "The Lunar Pokémon, bringer of good dreams and protector against nightmares.",
        physical: "<ul><li>Height: 4'11\" </li><li>Weight: 188.7 lbs </li><li>Best Abilities: Levitate</li></ul>"
    },
};

const modal = document.getElementById("pokemon-modal");
const modalClose = document.getElementById("modal-close");
const modalPhysical = document.getElementById("modal-physical");
const modalImage = document.getElementById("modal-image");

function showModal(imageSrc, imageAlt, physical) {
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modalPhysical.innerHTML = physical;
    modal.classList.remove("hidden");
}

function hideModal() {
    modal.classList.add("hidden");
}

function getPokemonInfo(name) {
    return pokemonDetails[name] ? pokemonDetails[name].physical : "A powerful Pokémon from Generation 4.";
}

function initPokemonModal() {
    const cards = document.querySelectorAll(".pokemon-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector("img");
            const physical = getPokemonInfo(card.querySelector("h2").textContent.trim());
            showModal(img.src, img.alt, physical);
        });
    });

    modalClose.addEventListener("click", hideModal);
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            hideModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            hideModal();
        }
    });
}

document.addEventListener("DOMContentLoaded", initPokemonModal);