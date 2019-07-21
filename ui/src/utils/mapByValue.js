export default (arr, key) => {
  return arr.reduce((acc, ob) => ({ ...acc, [ob[key]]: { ...ob } }), {});
};
