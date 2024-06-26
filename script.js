// Example JavaScript for animations or interactive elements
document.addEventListener('DOMContentLoaded', function() {
    animateGreetings();
});

function animateGreetings() {
    const greetings = [
        "Happy Birthday, Divya!",
        "Wishing you a wonderful day!",
        "Let's celebrate!",
        "Cheers to our friendship!"
    ];

    let index = 0;
    setInterval(function() {
        document.querySelector('h1').textContent = greetings[index];
        index = (index + 1) % greetings.length;
    }, 3000); // Change greeting every 3 seconds
}
