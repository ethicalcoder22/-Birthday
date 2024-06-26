// JavaScript for animations and interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    const images = document.querySelectorAll('.slideshow img');
    let currentImageIndex = 0;

    setInterval(function() {
        images[currentImageIndex].style.display = 'none';
        images[currentImageIndex].classList.remove('fade-in');

        currentImageIndex = (currentImageIndex + 1) % images.length;

        images[currentImageIndex].style.display = 'block';
        images[currentImageIndex].classList.add('fade-in');
    }, 5000);

    // Interactive birthday wishes
    const submitWishButton = document.getElementById('submitWish');
    const birthdayWishesInput = document.getElementById('birthdayWishes');
    const confirmationMessage = document.getElementById('confirmationMessage');

    submitWishButton.addEventListener('click', function() {
        const wish = birthdayWishesInput.value.trim();

        if (wish !== '') {
            confirmationMessage.textContent = 'Your wish has been sent!';
            birthdayWishesInput.value = '';
        } else {
            confirmationMessage.textContent = 'Please write a wish before sending.';
        }

        // Clear confirmation message after 3 seconds
        setTimeout(function() {
            confirmationMessage.textContent = '';
        }, 3000);
    });
});
