function delayedResult (num1, num2, sec, callback) {
    setTimeout( () => {
      let result = `${num1+num2}(${num1}+${num2})`
      callback(result);
    },sec)
};

delayedResult (4, 5, 3000, (result) => {
  window.alert(result);
});