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
  { name: 'Stylish T-Shirt', price: 499 },
  { name: 'Trendy Jeans', price: 999 },
  { name: 'Running Shoes', price: 1499 },
  { name: 'Wrist Watch', price: 1999 },
  { name: 'Leather Wallet', price: 799 },
  { name: 'Sports Cap', price: 299 },
  { name: 'Backpack Bag', price: 1199 },
  { name: 'Designer Sunglasses', price: 1599 },
  { name: 'Formal Shirt', price: 899 },
  { name: 'Casual Shorts', price: 699 },
  { name: 'Fitness Tracker', price: 2499 },
  { name: 'Earbuds', price: 3499 }
];

// Add event listeners to product buttons
document.querySelectorAll('.cart-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = products[index];
    addToCart(product);
    alert(`${product.name} has been added to your cart.`);
  });
});
