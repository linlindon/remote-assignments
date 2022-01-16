
// count the array length, ex. 4，the indices 0、1、2、3
const nums =[2, 7, 11, 5];

function twoSum(nums, target) {
    go_on = true;
    const result = [];

    while ( go_on === true) {
        let indices = nums.length;

        //get two random indices from the nums array
        let indices1 = Math.floor(Math.random()*indices);
        let indices2 = Math.floor(Math.random()*indices);
        while (indices1 === indices2) {
            indices2 = Math.floor(Math.random()*indices);
        }
        
        //add the two numbers & compare with target
        let total = nums[indices1] + nums[indices2];
        if (target === total) {
            result.push(indices1, indices2);
            console.log(result);
            go_on = false;
        } 
    }
}

twoSum(nums, 9);
