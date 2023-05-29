// Array to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemIndex) {
  var quantityInput = document.querySelectorAll('.quantity-input')[itemIndex];
  var quantity = parseInt(quantityInput.value);

  var itemName = document.querySelectorAll('.item-name')[itemIndex].innerText;
  var itemPrice = parseFloat(document.querySelectorAll('.item-price')[itemIndex].innerText);

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
}

// Function to delete an item from the cart
function deleteItem(index) {
  cartItems.splice(index, 1);

  // Refresh the cart display
  updateCart();
}

// Initialize event listeners when the page is loaded
window.addEventListener('DOMContentLoaded', function () {
  // Get all the "add-to-cart-btn" elements
  var addToCartButtons = document.getElementsByClassName('add-to-cart-btn');

  // Attach click event listener to each "add-to-cart-btn"
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function () {
      var itemIndex = Array.prototype.indexOf.call(addToCartButtons, this);
      addToCart(itemIndex);
    });
  }
});
