module.exports = (theFunction) => {
  Promise.resolve(theFunction(req, res, next)).catch(next);
};
