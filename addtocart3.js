// Initialize variables
let cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Function to update the cart display
function updateCartDisplay() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  totalPriceElement.textContent = `₹${total}`;
}

// Function to add product to cart
function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

// Sample product data
const products = [
  { name: 'red skirt', price: 499 },
  { name: 'blue shirt', price: 999 },
  { name: 'formal shirt', price: 1499 },
  { name: 'running shoes', price: 1999 },
  { name: 'casual Shorts', price: 799 },
  { name: 'diamond earing', price: 299 },
  { name: 'black frock', price: 1199 },
  { name: 'amazon google alexa', price: 1599 },
  { name: 'ladies red purse', price: 899 },
  { name: 'laptop', price: 60299 },
  { name: 'stylish weather resistant water bottle', price: 2499 },
  { name: 'el drado mens perfume 100ml', price: 3499 }
];

// Add event listeners to product buttons
document.querySelectorAll('.cart-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = products[index];
    addToCart(product);
    alert(`${product.name} has been added to your cart.`);
  });
});
