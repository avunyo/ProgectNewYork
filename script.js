document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("runawayButton");

    button.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - button.clientWidth);
        const y = Math.random() * (window.innerHeight - button.clientHeight);
        
        button.style.position = "absolute"; // Важливо!
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    });
});
