function movesZeroes(nums) {
  let lastZero = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const auxiliar = nums[lastZero];
      nums[lastZero] = nums[i];
      nums[i] = auxiliar;
      lastZero++;
    }
  }
  return nums;
};

console.log(movesZeroes([0, 1, 0, 3, 12]))


/**
 * primeiro o ultimo zero começa sendo 0 pois nao sabemos aonde ele esta
 * codigo faz a checagem e ve se o primeiro é zero, se for ele passa para o proximo numero, numero é diferente de zero? ele troca com o ultimo zero achado
 */