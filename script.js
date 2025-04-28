// Gallery scroll functionality
function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 250; // Adjust this to control the scroll speed

    if (direction === 1) {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (direction === -1) {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}

// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For now, log the form data to the console (you can send this data to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields after submission
    document.getElementById('contactForm').reset();

    // Show a confirmation message (you can use a modal or alert here)
    alert('Thank you for your message! We will get back to you soon.');
});
