// Write a function to find the average value in an array of numbers


function avg(nums) {
    const length = nums.length;
    const sum = getSum(nums);
    return sum / length;
}

function getSum(nums) {
    let sum = 0;
    for (num of nums) {
        sum += num;
    }
    return sum;
}
console.log(avg([0, 50])); //25
console.log(avg([75, 76, 80, 95, 100])); //85.2