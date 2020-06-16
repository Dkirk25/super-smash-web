import _ from "lodash";

export function sortUsersByScore(array: IUser[]) {
  if (array && Array.isArray(array)) {
    return _.sortBy(array, "score");
  }
  return [];
}

export const first = [
  "Mario",
  "Donkey Kong",
  "Link",
  "Samus",
  "Dark Samus",
  "Yoshi",
  "Kirby",
  "Fox",
  "Pikachu",
  "Luigi",
  "Ness",
  "Captain Falcon",
  "Jigglypuff"
];

export const second = [
  "Peach",
  "Daisy",
  "Bowser",
  "Ice Climbers",
  "Sheik",
  "Zelda",
  "Dr. Mario",
  "Pichu",
  "Falco",
  "Marth",
  "Lucina",
  "Young Link",
  "Ganondorf"
];

export const third = [
  "Mewtwo",
  "Roy",
  "Chrom",
  "Mr. Game & Watch",
  "Meta Knight",
  "Pit",
  "Dark Pit",
  "Zero Suit Samus",
  "Wario",
  "Snake",
  "Ike",
  "Pokemon Trainer",
  "Diddy Kong"
];

export const fourth = [
  "Lucas",
  "Sonic",
  "King Dedede",
  "Olimar",
  "Lucario",
  "R.O.B.",
  "Toon Link",
  "Wolf",
  "Villager",
  "Mega Man",
  "Wii Fit Trainer",
  "Rosalina & Luma",
  "Little Mac"
];

export const fifth = [
  "Greninja",
  "Palutena",
  "PAC-MAN",
  "Robin",
  "Shulk",
  "Bowser Jr.",
  "Duck Hunt",
  "Ryu",
  "Ken",
  "Cloud",
  "Corrin",
  "Bayonetta",
  "Inkling"
];

export const sixth = [
  "Ridley",
  "Simon",
  "Richter",
  "King K. Rool",
  "Isabelle",
  "Incineroar",
  "Piranha Plant",
  "Joker",
  "Hero",
  "Banjo & Kazooie",
  "Mii Brawler",
  "Mii Swordfighter",
  "Mii Gunner"
];

/**
 *
 */
export function formatFighterName(name: string) {
  if (name === "Pokemon Trainer") return "POKÉMON TRAINER";
  else if (name === "Mii Swordfighter") return "Mii SWORD FIGHTER";
  else if (name === "Mii Brawler") return "Mii BRAWLER";
  else if (name === "Mii Gunner") return "Mii GUNNER";
  else if (name === "Wii Fit Trainer") return "Wii Fit TRAINER";
  else return name.toUpperCase();
}

/**
 *
 */
export function isMiiFighter(name: string) {
  if (name.startsWith("Mii")) return true;
  return false;
}

export const rows = [first, second, third, fourth, fifth, sixth];

export const list = [...first, ...second, ...third, ...fourth, ...fifth, ...sixth];

export default { rows, list };
