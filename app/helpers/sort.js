const sort = (array) => {
  // sort users array by score;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[j+1]) {
        if(Number(array[j].score) < Number(array[j+1].score)) [[array[j], array[j+1]] = [array[j+1], array[j]]];
      }
    }
  }

  return array;
}

export default sort;