import { helper } from '@ember/component/helper';

export default helper(function sum(params /*, named*/) {
  console.log(params);
  let sum = 0;
  params.forEach((param) => {
    sum += param;
  });
  return sum;
});
