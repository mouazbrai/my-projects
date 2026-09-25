// Mouse Interaction

const interactiveCards = document.querySelectorAll(
    ".skill-item, .project-card, .stat-card, .mini-card"
);


interactiveCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -2;
        const rotateY = ((x / rect.width) - 0.5) * 2;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-3px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});