document.addEventListener('mousemove',(e)=>{
    const icons = document.querySelectorAll(".sparcle-icon");
    icons.forEach(icon =>{
        const speed = icon.getAttribute('data-speed') || 10;
        const adjustedSpeed = speed * 0.4;

        const x = (window.innerHeight-e.clientX * adjustedSpeed) / 100;

        const y = (window.innerWidth-e.clientY * adjustedSpeed) / 100;
        icon.style.transform = `translate(${x}px, ${y}px)`
    })
})

document.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll(".sparcle-icon-smer");
    icons.forEach(icon => {
        const speed = icon.getAttribute('data-speed') || 10;
        const adjustedSpeed = speed * 0.7;

        const x = (e.clientX - window.innerWidth / 2) * adjustedSpeed / 100;
        const y = (e.clientY - window.innerHeight / 2) * adjustedSpeed / 100;

        icon.style.transform = `translate(${x}px, ${y}px)`;
    });
});
