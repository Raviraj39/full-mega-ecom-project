module.exports = (theFun) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
