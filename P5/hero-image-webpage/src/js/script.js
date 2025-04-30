

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cta-button');
    
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');
    const descriptionBox = document.getElementById('description-box');
    const descriptionText = document.getElementById('description-text');
    const closeButton = document.getElementById('close-button');

    images.forEach((image) => {
        image.addEventListener('click', (event) => {
            const description = image.getAttribute('data-description');
            descriptionText.textContent = description;

            
            const rect = image.getBoundingClientRect();
            descriptionBox.style.top = `${rect.top + window.scrollY + rect.height / 2 - descriptionBox.offsetHeight / 2}px`;
            descriptionBox.style.left = `${rect.left + window.scrollX + rect.width / 2 - descriptionBox.offsetWidth / 2}px`;
            descriptionBox.style.display = 'block'; 
        });
    });

    closeButton.addEventListener('click', () => {
        descriptionBox.style.display = 'none'; 
    });
});