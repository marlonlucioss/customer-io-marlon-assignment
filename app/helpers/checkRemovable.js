import { helper } from '@ember/component/helper';

export default helper(function checkRemovable(params /*, named*/) {
  let attr;
  params.forEach((param) => {
    attr = param;
  });
  return !['id', 'email', 'created_at', 'last_updated'].includes(attr);
});
