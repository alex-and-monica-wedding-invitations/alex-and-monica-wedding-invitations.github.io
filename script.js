document.querySelector('.open-invitation').addEventListener('click', function() {
    document.querySelector('.invitation-backdrop').style.display = 'block';
    document.querySelector('.invitation-card').style.display = 'block';
    confetti();
});

document.querySelector('.invitation-card img').addEventListener('click', function() {
    document.querySelector('.invitation-card').classList.toggle('flip');
});

document.querySelector('.invitation-backdrop').addEventListener('click', function() {
    document.querySelector('.invitation-backdrop').style.display = 'none';
    document.querySelector('.invitation-card').style.display = 'none';
});

const confettiColors = ['#FFFFEF', '#FFDA9E', '#FFD7F0', '#D7FAFF'];

function confetti() {
    for (let i = 0; i < 100; i++) {
        const canvas = document.createElement('canvas');
        canvas.classList.add('confetti');
        canvas.width = 6;
        canvas.height = 12;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        document.body.appendChild(canvas);
    }

    const confettis = document.querySelectorAll('.confetti');
    confettis.forEach(confetti => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const rotation = Math.random() * 360;
        const scale = Math.random() * 0.5 + 0.5;
        const speed = Math.random() * 2 + 1;
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        confetti.style.animation = `fall ${speed}s linear infinite`;
    });

    setTimeout(() => {
        confettis.forEach(confetti => {
            confetti.remove();
        });
    }, 3000);
}
