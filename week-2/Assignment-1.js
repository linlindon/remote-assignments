// 找出最大數
function max(numbers) {
    let max_num = 0;
    for (let num of numbers ) {
        if ( num > max_num ){
            max_num = num;
        }  
    }console.log(max_num);
}
