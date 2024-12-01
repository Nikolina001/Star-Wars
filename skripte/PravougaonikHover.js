
document.addEventListener('DOMContentLoaded', function() {
    const imgElements = document.querySelectorAll('#Ikonice img');
    const h1Element = document.querySelector('#DrugiPravougaonik h1');

    imgElements.forEach(img => {
        img.addEventListener('mouseover', function() {
            h1Element.classList.add('hovered');
        });
        img.addEventListener('mouseout', function() {
            h1Element.classList.remove('hovered');
        });
    });
});

