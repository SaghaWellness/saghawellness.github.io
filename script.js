document.getElementById('enquiryForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const product = document.getElementById('product').value;
  const message = document.getElementById('message').value.trim();

  const text = [
    'Hello SAGAH Wellness Products,',
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
