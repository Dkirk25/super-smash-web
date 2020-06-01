import _ from "lodash";

const sort = array => {
  if (array && Array.isArray(array)) {
    // sort users array by score;
    return _.sortBy(array, "score");
    // for (let i = 0; i < array.length; i++) {
    //   for (let j = 0; j < array.length; j++) {
    //     if (array[j + 1]) {
    //       if (Number(array[j].score) < Number(array[j + 1].score))
    //         [([array[j], array[j + 1]] = [array[j + 1], array[j]])];
    //     }
    //   }
    // }

    // return array;
  }
  return [];
};

export default sort;
