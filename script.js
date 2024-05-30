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
        invitationFront.style.display = 'none';
        invitationBack.style.display = 'block';
        invitationBack.style.animation = 'flip 1s forwards';
    });

    invitationContainer.addEventListener('click', (event) => {
        if (event.target === invitationContainer) {
            invitationContainer.classList.remove('show');
            invitationFront.style.display = 'block';
            invitationBack.style.display = 'none';
        }
    });
});
