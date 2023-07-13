// Add a click event listener to each image
const images = document.querySelectorAll('.image');
images.forEach(image => {
  image.addEventListener('click', function() {
    // Toggle a class to show/hide a larger version of the image
    this.classList.toggle('expanded');
  });
});
