function initParticles() {
  particlesJS.load("particles-js", "config/particlesjs-config.json", () => {
    console.log("Particles.js config loaded");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initParticles);
} else {
  initParticles(); // DOM already ready
}
