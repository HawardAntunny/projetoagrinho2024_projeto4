// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    steps.forEach(step => {
        step.addEventListener("click", () => {
            alert(`Você clicou na etapa: ${step.querySelector("h2").textContent}`);
        });
    });
});
