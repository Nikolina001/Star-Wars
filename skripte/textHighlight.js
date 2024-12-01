document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('text-container');
    const words = container.innerText.split(' ');
    container.innerHTML = '';

    words.forEach(word => {
        const span = document.createElement('span');
        span.innerText = word + ' ';
        span.addEventListener('mouseover', () => {
            span.classList.add('highlight');
        });
        span.addEventListener('mouseout', () => {
            span.classList.remove('highlight');
        });
        container.appendChild(span);
    });
});