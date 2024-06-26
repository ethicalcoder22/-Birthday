// JavaScript for animations and interactivity

// Messages in different languages
const birthdayMessages = [
    "दिव्या, आपको जन्मदिन की बहुत-बहुत बधाई!",
    "¡Feliz cumpleaños, Divya!",
    "Divya, 생일 축하해요!",
    "Joyeux anniversaire, Divya!",
    "Divya, feliz aniversário!",
    "Alles Gute zum Geburtstag, Divya!"
];

// Function to display messages
function displayBirthdayMessages() {
    const messageContainer = document.getElementById('birthdayMessages');
    birthdayMessages.forEach(message => {
        const p = document.createElement('p');
        p.textContent = message;
        messageContainer.appendChild(p);
    });
}

// Function to update and animate heading text
function animateHeading() {
    const heading = document.getElementById('birthdayHeading');
    let index = 0;

    setInterval(() => {
        heading.textContent = birthdayMessages[index];
        index = (index + 1) % birthdayMessages.length;
    }, 5000); // Change message every 5 seconds
}

// Call functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayBirthdayMessages();
    animateHeading();
});

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
