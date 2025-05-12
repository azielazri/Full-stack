document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recommendationForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Display the thank you message
    thankYouMessage.style.display = 'block';

    // Optionally, reset the form fields
    form.reset();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recommendationForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your recommendation!');
    form.reset();
  });
});
