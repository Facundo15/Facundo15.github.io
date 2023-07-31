
const emailContact = 'facufernandez.dev1820@gmail.com';

function openContact(event) {
    event.preventDefault();
    const fullname = document.getElementById('input-fullname').value;
    const message = document.getElementById('input-message').value;
    const location = `mailto:${emailContact}?subject=${fullname}&body=${message}`;
    window.location.href = location;
}


function loadIframes() {
    const iframesContaienrs = document.querySelectorAll('.iframe-container');

    const loadLasyIframe = (iframeContaiener) => {
        const iframeSrc = iframeContaiener.getAttribute("data-src");

        if (iframeSrc) {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', iframeSrc);
            iframe.setAttribute('frameborder', '0');
            iframe.height = "190px";
            iframe.width = "500px"
            iframeContaiener.appendChild(iframe);
            iframeContaiener.removeAttribute('data-src');
        }
    };

    const intersectObserver = new IntersectionObserver(enties => {
        enties.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                loadLasyIframe(target);
                intersectObserver.unobserve(target);
            }
        });
    });

    iframesContaienrs.forEach(iframeContainer => {
        intersectObserver.observe(iframeContainer);
    })
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', openContact);

    loadIframes();
});