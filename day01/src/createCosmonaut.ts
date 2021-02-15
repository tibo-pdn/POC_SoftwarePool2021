interface Cosmonaut {
    name: string;
    mission: string;
    country: string;
}

function createCosmonaut(name: string, country: string, mission: string) : Cosmonaut {
    let cosmonaut : Cosmonaut = {name:name, country:country, mission:mission};

    return cosmonaut;
}

console.log(createCosmonaut('Henry', 'France', 'Apollo 11'));