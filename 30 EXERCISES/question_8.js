function secondLastAndFirstBigAndSmall(nums) {
    let result = nums.sort((a, b) => a - b);
    let secondSmall = result[1];
    let secondBig = result[result.length - 2];
    let answer = [];
    answer.push(secondBig, secondSmall);
    console.log(answer);
}
secondLastAndFirstBigAndSmall([1, 2, 3, 4, 5])