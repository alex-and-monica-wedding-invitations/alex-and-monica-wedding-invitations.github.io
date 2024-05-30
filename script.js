document.addEventListener('DOMContentLoaded', () => {
    const openInvitationButton = document.getElementById('open-invitation');
    const invitationContainer = document.querySelector('.invitation');
    const invitationFront = document.querySelector('.invitation-front');
    const invitationBack = document.querySelector('.invitation-back');
    const confettiCanvas = document.getElementById('confetti');
    const confettiCtx = confettiCanvas.getContext('2d');

    function triggerConfetti() {
        var duration = 5 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            colors: ['#FFD4CA', '#FFF6CA', '#CAF2FF', '#FFFFF5']
        };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    openInvitationButton.addEventListener('click', () => {
        invitationContainer.classList.add('show');
        invitationFront.style.animation = 'slideIn 1s forwards';
        triggerConfetti();
    });

    invitationFront.addEventListener('click', function() {
        invitationFront.classList.add('flip-out');
        invitationBack.classList.add('flip-in');
        setTimeout(() => {
            invitationFront.style.display = 'none';
            invitationBack.style.display = 'block';
            invitationFront.classList.remove('flip-out');
            invitationBack.classList.remove('flip-in');
        }, 600); 
    });

    invitationBack.addEventListener('click', function() {
        invitationBack.classList.add('flip-out');
        invitationFront.classList.add('flip-in');
        setTimeout(() => {
            invitationBack.style.display = 'none';
            invitationFront.style.display = 'block';
            invitationBack.classList.remove('flip-out');
            invitationFront.classList.remove('flip-in');
        }, 600); 
    });

    invitationContainer.addEventListener('click', (event) => {
        if (event.target === invitationContainer) {
            invitationContainer.classList.remove('show');
            invitationFront.style.display = 'block';
            invitationBack.style.display = 'none';
        }
    });
});
