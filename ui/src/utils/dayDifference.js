export default (date, reference = new Date()) => {
  return Math.floor((new Date(date) - reference) / (24 * 60 * 60 * 1000));
};
