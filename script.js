document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    const proposalText = document.getElementById("proposal-text");
    const thankYouMsg = document.getElementById("thank-you-msg");
    const convinceMsg = document.getElementById("convince-message");
    const finalSection = document.getElementById("final-section");
    const countdownTimer = document.getElementById("countdown-timer");

    const loveVideo = document.getElementById("love-video");
    const happyVideo = document.getElementById("happy-video");
    const bgMusic = document.getElementById("bg-music");

    let noClicks = 0;
    let yesBtnScale = 1;

    const messages = [
        "Jaylyn, are you sure? 🥺",
        "Please, don't break my heart! 💔",
        "Jaylyn, I'm serious! 😭",
        "Last chance, pretty please? 💘"
    ];

    const proposalMessage = "Jaylyn, will you be my Valentine? ❤️ - Samuell";
    const thankYouText = `
Jaylyn, my love, my heart’s delight,
A star that glows in endless night.
Your beauty shines, so soft, so true,
Like morning’s light in golden hue.

Your eyes, like diamonds, bright and deep,
Hold secrets only love can keep.
A gaze so warm, so full of grace,
I lose myself in their embrace.

Your skin, so fair, a gentle glow,
Like moonlit whispers soft and slow.
A touch of silk, a kiss of light,
A dream I cherish every night.

With every laugh, my soul takes flight,
You are my joy, my heart’s own light.
Forever yours, in love I stay,
My Jaylyn, now and every day.`;

    function updateCountdown() {
        const now = new Date();
        const valentine = new Date(now.getFullYear(), 1, 14);
        const timeLeft = valentine - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        countdownTimer.innerText = `⏳ Countdown to our Valentine’s Day: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    setInterval(updateCountdown, 1000);

    function typeText() {
        let i = 0;
        proposalText.innerHTML = "";

        function type() {
            if (i < proposalMessage.length) {
                proposalText.innerHTML += proposalMessage.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        type();
    }
    typeText();

    noBtn.addEventListener("click", () => {
        convinceMsg.innerText = messages[noClicks % messages.length];
        noClicks++;

        yesBtnScale += 0.3;
        yesBtn.style.transform = `scale(${yesBtnScale})`;
        yesBtn.style.transition = "transform 0.1s ease-in-out";
    });

    yesBtn.addEventListener("click", () => {
        // Redirect to WhatsApp DM
        window.location.href = "https://wa.me/2348108778025?text=Yes+I+will+be+your+val+🌹";

        // Optional: Keep the existing animation/effects if you want
        document.querySelector(".buttons").style.display = "none";
        proposalText.style.display = "none";
        convinceMsg.style.display = "none";

        loveVideo.classList.add("hidden");
        happyVideo.classList.remove("hidden");

        finalSection.classList.remove("hidden");
        thankYouMsg.innerText = thankYouText;
        startHeartRain();
    });

    function startHeartRain() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * window.innerWidth + "px";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 200);
    }

    function playMusic() {
        if (bgMusic.paused) {
            bgMusic.currentTime = 20;
            bgMusic.play().catch(() => {
                console.log("Autoplay blocked, waiting for user interaction...");
            });
        }
    }

    playMusic();
    document.body.addEventListener("click", playMusic, { once: true });
    document.body.addEventListener("touchstart", playMusic, { once: true });

    bgMusic.addEventListener("ended", () => {
        bgMusic.currentTime = 0;
        bgMusic.play();
    });

    bgMusic.volume = 0.5;
});