/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
  delete obj[prop];
  return obj;
}

function numObjectProps(obj) {
  const totalItems = Object.keys(obj).length;
 return totalItems;
}
function shoppingCart(cart) {
  let total = 0

  for (let i = 0; i < cart.length; i++)
  const cartItem = cart[i];
  total += cartItem.amount;
  return total;
}

function compareObjects(obj1, obj2) {

module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};
