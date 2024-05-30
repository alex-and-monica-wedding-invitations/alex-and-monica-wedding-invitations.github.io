document.addEventListener('DOMContentLoaded', () => {
    const openInvitationButton = document.getElementById('open-invitation');
    const invitationContainer = document.querySelector('.invitation');
    const invitationFront = document.querySelector('.invitation-front');
    const invitationBack = document.querySelector('.invitation-back');

    const jsConfetti = new JSConfetti();

    openInvitationButton.addEventListener('click', () => {
        invitationContainer.classList.add('show');
        invitationFront.style.animation = 'slideIn 1s forwards';
        jsConfetti.addConfetti({
            confettiColors: ['#FF4081', '#FFC107', '#8BC34A', '#00BCD4', '#9C27B0']
        });
    });

    invitationFront.addEventListener('click', () => {
        invitationFront.style.animation = '';
        invitationFront.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            invitationBack.style.display = 'block';
            invitationBack.style.animation = 'flipToBack 1s forwards';
        }, 1000); // Delay to synchronize with the transform
    });

    invitationBack.addEventListener('click', () => {
        invitationBack.style.animation = '';
        invitationBack.style.transform = 'rotateY(0deg)';
        setTimeout(() => {
            invitationFront.style.display = 'block';
            invitationFront.style.animation = 'flipToFront 1s forwards';
            invitationBack.style.display = 'none';
        }, 1000); // Delay to synchronize with the transform
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
