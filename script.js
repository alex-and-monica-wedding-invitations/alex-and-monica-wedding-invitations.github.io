document.getElementById('open-invitation').addEventListener('click', function() {
    document.getElementById('invitation-container').style.display = 'block';
    document.getElementById('front-invitation').classList.remove('flip');
    document.getElementById('back-invitation').classList.remove('flip');
    confetti();
  });
  
  document.getElementById('front-invitation').addEventListener('click', function() {
    this.classList.add('flip');
  });
  
  document.getElementById('back-invitation').addEventListener('click', function() {
    this.classList.add('flip');
  });
  
  document.getElementById('invitation-container').addEventListener('click', function(event) {
    if (event.target.id === 'invitation-container') {
      this.style.display = 'none';
    }
  });
  
  function confetti() {
    var colors = ['#FFFFEF', '#FFDA9E', '#FFD7F0', '#D7FAFF'];
    var end = Date.now() + 3000;
    (function frame() {
      canvasConfetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      canvasConfetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
  