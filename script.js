// Array to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  var quantityInput = document.querySelector('.quantity-input');
  var quantity = parseInt(quantityInput.value);

  // Create a new cart item object
  var cartItem = {
    name: itemName,
    price: itemPrice,
    quantity: quantity
  };

  // Add the item to the cartItems array
  cartItems.push(cartItem);

  // Refresh the cart display
  updateCart();
}

// Function to update the cart display
function updateCart() {
  var cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  var totalAmount = 0;

  // Iterate over cartItems array and create list items for each item
  cartItems.forEach(function (item) {
    var listItem = document.createElement('li');
    var itemTotal = item.price * item.quantity;

    listItem.innerText = item.name + ' - ' + item.price + '/- x ' + item.quantity + ' = ' + itemTotal.toFixed(2) + '/-';

    cartList.appendChild(listItem);

    totalAmount += itemTotal;
  });

  // Update the total amount
  var totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.innerText = totalAmount.toFixed(2);

  // Reset the quantity input
  var quantityInput = document.querySelector('.quantity-input');
  quantityInput.value = 1;
}

// Function to delete an item from the cart
function deleteItem(button) {
  var cartItem = button.parentNode;
  cartItem.remove();

  // Remove the item from the cartItems array
  var index = Array.prototype.indexOf.call(cartItem.parentNode.children, cartItem);
  cartItems.splice(index, 1);

  // Refresh the cart display
  updateCart();
}

// Array to store cart items


// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  var quantityInput = document.querySelector('.quantity-input');
  var quantity = parseInt(quantityInput.value);

  // Create a new cart item object
  var cartItem = {
    name: itemName,
    price: itemPrice,
    quantity: quantity
  };

  // Add the item to the cartItems array
  cartItems.push(cartItem);

  // Refresh the cart display
  updateCart();
}

// Function to update the cart display
function updateCart() {
  var cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  var totalAmount = 0;

  // Iterate over cartItems array and create list items for each item
  cartItems.forEach(function (item, index) {
    var listItem = document.createElement('li');
    var itemTotal = item.price * item.quantity;

    listItem.innerText = item.name + ' - ' + item.price + '/- x ' + item.quantity + ' = ' + itemTotal.toFixed(2) + '/-';

    // Create the delete button for the item
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
      deleteItem(index);
    };

    listItem.appendChild(deleteButton);
    cartList.appendChild(listItem);

    totalAmount += itemTotal;
  });

  // Update the total amount
  var totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.innerText = totalAmount.toFixed(2);

  // Reset the quantity input
  var quantityInput = document.querySelector('.quantity-input');
  quantityInput.value = 1;
}

// Function to delete an item from the cart
function deleteItem(index) {
  cartItems.splice(index, 1);

  // Refresh the cart display
  updateCart();
}

