// 타입 상성 정보
const typeChart = {
  normal: { fighting: 2, ghost: 0, fairy: 1 },
  fire: {
    fire: 0.5,
    water: 0.5,
    grass: 2,
    ice: 2,
    bug: 2,
    steel: 0.5,
    fairy: 1,
  },
  water: {
    fire: 2,
    water: 0.5,
    grass: 0.5,
    electric: 0.5,
    ice: 0.5,
    steel: 0.5,
    fairy: 1,
  },
  electric: {
    water: 2,
    electric: 0.5,
    grass: 0.5,
    ice: 1,
    flying: 0.5,
    dragon: 0.5,
  },
  grass: {
    fire: 0.5,
    water: 2,
    grass: 0.5,
    electric: 1,
    ice: 2,
    poison: 0.5,
    ground: 0.5,
    flying: 0.5,
    bug: 2,
    rock: 2,
    dragon: 0.5,
    steel: 0.5,
    fairy: 1,
  },
  ice: {
    fire: 0.5,
    water: 0.5,
    ice: 0.5,
    electric: 1,
    grass: 2,
    ground: 2,
    flying: 2,
    steel: 0.5,
  },
  fighting: {
    normal: 0.5,
    ice: 2,
    poison: 0.5,
    flying: 0.5,
    psychic: 2,
    bug: 0.5,
    rock: 2,
    ghost: 0,
    steel: 2,
    fairy: 0.5,
  },
  poison: {
    grass: 2,
    fighting: 1,
    poison: 0.5,
    ground: 0.5,
    bug: 1,
    rock: 0.5,
    ghost: 0.5,
    steel: 0,
    fairy: 2,
  },
  ground: {
    fire: 2,
    electric: 2,
    poison: 2,
    flying: 0,
    psychic: 1,
    bug: 0.5,
    rock: 2,
    steel: 2,
  },
  flying: { electric: 2, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
  psychic: { fighting: 0.5, poison: 0.5, psychic: 0.5, steel: 0.5, fairy: 1 },
  bug: {
    fire: 0.5,
    grass: 0.5,
    fighting: 0.5,
    poison: 0.5,
    flying: 0.5,
    psychic: 2,
    steel: 0.5,
    fairy: 0.5,
  },
  rock: {
    normal: 0.5,
    fire: 2,
    water: 2,
    fighting: 0.5,
    ground: 0.5,
    flying: 2,
    bug: 2,
    steel: 0.5,
  },
  ghost: {
    normal: 0,
    fighting: 0,
    poison: 0.5,
    bug: 0.5,
    ghost: 2,
    dark: 2,
    steel: 0.5,
  },
  dragon: { dragon: 2, steel: 0.5, fairy: 0 },
  dark: { fighting: 0.5, psychic: 2, dark: 0.5, fairy: 0.5 },
  steel: {
    fire: 2,
    water: 1,
    ice: 0.5,
    flying: 2,
    psychic: 1,
    bug: 1,
    rock: 2,
    dragon: 2,
    steel: 0.5,
    fairy: 2,
  },
  fairy: {
    fighting: 2,
    poison: 0.5,
    ground: 1,
    flying: 2,
    psychic: 1,
    bug: 1,
    steel: 0.5,
    fairy: 0.5,
  },
};

export const battle = (_pokemon1, _pokemon2) => {
  const pokemon1 = {
    name: _pokemon1.koreanName,
    hp: _pokemon1.baseStats[0].value,
    attack: _pokemon1.baseStats[1].value,
    defense: _pokemon1.baseStats[2].value,
    specialAttack: _pokemon1.baseStats[3].value,
    specialDefense: _pokemon1.baseStats[4].value,
    speed: _pokemon1.baseStats[5].value,
    type: _pokemon1.types.map((type) => type),
  };

  const pokemon2 = {
    name: _pokemon2.koreanName,
    hp: _pokemon2.baseStats[0].value,
    attack: _pokemon2.baseStats[1].value,
    defense: _pokemon2.baseStats[2].value,
    specialAttack: _pokemon2.baseStats[3].value,
    specialDefense: _pokemon2.baseStats[4].value,
    speed: _pokemon2.baseStats[5].value,
    type: _pokemon2.types.map((type) => type),
  };

  // 두 포켓몬의 스텟 합계
  let pokemon1TotalStat =
    pokemon1.hp +
    pokemon1.attack +
    pokemon1.defense +
    pokemon1.specialAttack +
    pokemon1.specialDefense +
    pokemon1.speed;

  let pokemon2TotalStat =
    pokemon2.hp +
    pokemon2.attack +
    pokemon2.defense +
    pokemon2.specialAttack +
    pokemon2.specialDefense +
    pokemon2.speed;

  // 타입 상성에 따라 스텟 합계 조정
  if (typeChart[pokemon1.type] && typeChart[pokemon2.type]) {
    pokemon1TotalStat *= typeChart[pokemon2.type][pokemon1.type];
    pokemon2TotalStat *= typeChart[pokemon1.type][pokemon2.type];
  }

  if (pokemon1TotalStat > pokemon2TotalStat) {
    return pokemon1.name;
  } else if (pokemon1TotalStat < pokemon2TotalStat) {
    return pokemon2.name;
  } else {
    return "무승부 입니다!";
  }
};
