const firstUniqChar = (s) => {
  const arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (arr[s[i].charCodeAt(0) - 97] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("ll"));


/**
 * usa se um array com 26 posiçoes com todas elas preenchidas por 0
 * for para percorrer o array e adicionar mais um aonde tier letras em suas devidas posiçoes ex: entrada aab teria uma array [2,1] pois tem 2 A e 1 B
 * for para ver qual a primeira letra que tenha somente 1 no array, seria ent o b na segunda posiçao
 */