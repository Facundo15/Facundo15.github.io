
const emailContact = 'facufernandez.dev1820@gmail.com';

function openContact(event) {
    event.preventDefault();
    const fullname = document.getElementById('input-fullname').value;
    const message = document.getElementById('input-message').value;
    const location = `mailto:${emailContact}?subject=${fullname}&body=${message}`;
    window.location.href = location;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', openContact);
});