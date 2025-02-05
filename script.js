document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope");
    const card = document.querySelector(".card");
    const front = document.querySelector(".front");
    const container = document.querySelector(".container");

    envelope.addEventListener("click", function () {
        // Toggle open state for the letter
        card.classList.toggle("open");
        front.classList.toggle("open");

        // Floating hearts animation
        for (let i = 0; i < 5; i++) {
            let heart = document.createElement("div");
            heart.classList.add("floating-heart");
            heart.style.left = `${Math.random() * 100}%`;
            container.appendChild(heart);

            // Remove after animation
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }

        // Confetti hearts effect
        for (let i = 0; i < 20; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    });
});
