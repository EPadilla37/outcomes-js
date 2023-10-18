function curriedAdd(...args) {
    if (args.length === 0) {
      return 0;
    }
  
    return function addNumber(nextNumber) {
      if (nextNumber === undefined) {
        return args.reduce((acc, num) => acc + num, 0);
      } else {
        return curriedAdd(...args, nextNumber);
      }
    };
  }
  
  module.exports = { curriedAdd };
  
  
