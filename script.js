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

const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
  reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('reviewName').value.trim();
    const product = document.getElementById('reviewProduct').value;
    const rating = document.getElementById('reviewRating').value;
    const comment = document.getElementById('reviewComment').value.trim();
    const stars = '★'.repeat(Number(rating)) + '☆'.repeat(5 - Number(rating));

    const text = [
      'Hello SAGHA Wellness Products,',
      '',
      'I would like to submit a customer review for approval.',
      `Name: ${name}`,
      `Product: ${product}`,
      `Rating: ${stars} (${rating}/5)`,
      `Review: ${comment}`
    ].join('\\n');

    const url = `https://wa.me/919025427136?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}
