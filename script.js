document.addEventListener('DOMContentLoaded', () => {
    const openInvitationButton = document.getElementById('open-invitation');
    const invitationContainer = document.querySelector('.invitation');
    const invitationFront = document.querySelector('.invitation-front');
    const invitationBack = document.querySelector('.invitation-back');
    const confettiCanvas = document.getElementById('confetti');
    const confettiCtx = confettiCanvas.getContext('2d');

    function showConfetti() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;

        const confettiColors = ['#FF4081', '#FFC107', '#8BC34A', '#00BCD4', '#9C27B0'];
        const confettiPieces = Array.from({ length: 100 }, () => ({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            size: Math.random() * 10 + 5,
            speed: Math.random() * 5 + 2
        }));

        function drawConfetti() {
            confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            confettiPieces.forEach(piece => {
                piece.y += piece.speed;
                if (piece.y > confettiCanvas.height) piece.y = 0;
                confettiCtx.fillStyle = piece.color;
                confettiCtx.fillRect(piece.x, piece.y, piece.size, piece.size);
            });
            requestAnimationFrame(drawConfetti);
        }

        drawConfetti();
    }

    openInvitationButton.addEventListener('click', () => {
        invitationContainer.classList.add('show');
        invitationFront.style.animation = 'slideIn 1s forwards';
        showConfetti();
    });

    invitationFront.addEventListener('click', () => {
        invitationFront.style.animation = '';
        invitationFront.style.transform = 'rotateY(180deg)';
        invitationBack.style.display = 'block';
        invitationBack.style.animation = 'flipToBack 1s forwards';
    });

    invitationBack.addEventListener('click', () => {
        invitationBack.style.animation = '';
        invitationBack.style.transform = 'rotateY(0deg)';
        invitationFront.style.display = 'block';
        invitationFront.style.animation = 'flipToFront 1s forwards';
        setTimeout(() => {
            invitationBack.style.display = 'none';
        }, 1000); // Delay to allow the flip animation to complete
    });

    invitationContainer.addEventListener('click', (event) => {
        if (event.target === invitationContainer) {
            invitationContainer.classList.remove('show');
            invitationFront.style.transform = 'translateX(100%)';
            invitationFront.style.animation = '';
            invitationBack.style.display = 'none';
            invitationBack.style.transform = 'rotateY(180deg)';
        }
    });
});
