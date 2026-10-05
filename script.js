// Wait for DOM to load fully
document.addEventListener("DOMContentLoaded", () => {
  const equalizerBars = document.querySelectorAll(".bar");
  const musicCard = document.getElementById("musicCard");
  const pulseBtn = document.getElementById("pulseBtn");

  // 1. Continuous JavaScript Animation: Equalizer Bars Random Heights
  function animateEqualizer() {
    equalizerBars.forEach((bar) => {
      // Generate a random height between 8px and 38px
      const randomHeight = Math.floor(Math.random() * 30) + 8;
      bar.style.height = `${randomHeight}px`;
    });
  }

  // Update equalizer bars every 150ms to create a dynamic music beat effect
  setInterval(animateEqualizer, 150);

  // 2. Event-driven Animation: Pulse Card Effect on Button Click
  pulseBtn.addEventListener("click", () => {
    // Smoothly scale and glow the music card using JS animation framing
    let scale = 1;
    let growing = true;
    let frame = 0;

    const pulseInterval = setInterval(() => {
      frame++;
      if (growing) {
        scale += 0.008;
        if (scale >= 1.05) growing = false;
      } else {
        scale -= 0.008;
      }

      musicCard.style.transform = `scale(${scale})`;
      musicCard.style.boxShadow = `0 0 ${frame * 2}px rgba(255, 119, 0, 0.8)`;

      if (scale <= 1 && !growing) {
        clearInterval(pulseInterval);
        musicCard.style.transform = "scale(1)";
        musicCard.style.boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.5)";
      }
    }, 16); // ~60fps smooth animation
  });
});