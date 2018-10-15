var cart = [];

function addToCart(item) { 
let price =  Math.floor(Math.random() * 101)}
let fruit = {[item]: price};
  cart.push(fruit);
  console.log(`${item} has been added to your cart.`);
  return cart;
 // write your code here
}

function viewCart() {
   if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    let items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}
  // write your code here
}

function total() {function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0
  
  for(var i = 0; i < cart.length; i++) {
  var itemPrice = cart[i][Object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)
    }
  
  for (var j =0; j<pricePerItemInCart.length; j++) {
    totalPrice = pricePerItemInCart[j]+=totalPrice
  }
  return totalPrice
}
total(cart)
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}