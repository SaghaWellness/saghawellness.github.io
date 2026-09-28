document.getElementById('enquiryForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const product = document.getElementById('product').value;
  const message = document.getElementById('message').value.trim();

  const text = [
    'Hello SAGHA Wellness Products,',
    '',
    'I would like to make an enquiry.',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Product: ${product}`,
    `Message: ${message || 'Please share product details.'}`
  ].join('\n');

  const url = `https://wa.me/919025427136?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
});


// Product enquiry buttons scroll to the contact form and preselect the product.
document.querySelectorAll('.product-enquiry-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const productName = this.getAttribute('data-product');
    const productSelect = document.getElementById('product');
    if (productSelect && productName) {
      productSelect.value = productName;
    }
    setTimeout(function () {
      const nameField = document.getElementById('name');
      if (nameField) nameField.focus({ preventScroll: true });
    }, 400);
  });
});
