let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', (e) => {
    cartCount++;
    updateCart();
    showPopup();
  });
});

function updateCart() {
  document.getElementById('cart-popup-count').textContent = cartCount;
}

function showPopup() {
  const popup = document.getElementById('cart-popup');
  popup.style.top = '20px';
  setTimeout(() => {
    popup.style.top = '-100px';
  }, 2000);
}
