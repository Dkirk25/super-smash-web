export default (name) => {
  if(name === 'Pokemon Trainer') return 'POKÉMON TRAINER';
  else if(name === 'Mii Swordfighter') return 'Mii SWORD FIGHTER';
  else if(name === 'Mii Brawler') return 'Mii BRAWLER';
  else if(name === 'Mii Gunner') return 'Mii GUNNER';
  else if(name === 'Wii Fit Trainer') return 'Wii Fit TRAINER';

  else return name.toUpperCase();
}