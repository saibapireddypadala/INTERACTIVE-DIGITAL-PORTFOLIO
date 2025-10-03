// GSAP Animations
gsap.from(".hero h1", { duration: 1.5, y: -50, opacity: 0 });
gsap.from(".hero p", { duration: 1.5, delay: 0.5, y: 50, opacity: 0 });

// ScrollMagic Controller
let controller = new ScrollMagic.Controller();

// Animate About Section
new ScrollMagic.Scene({
  triggerElement: "#about",
  triggerHook: 0.9
})
.setTween(gsap.from("#about h2", { x: -100, opacity: 0, duration: 1 }))
.addTo(controller);

// Animate Skills
new ScrollMagic.Scene({
  triggerElement: "#skills",
  triggerHook: 0.9
})
.setTween(gsap.from(".skills-list li", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2 }))
.addTo(controller);

// Animate Projects
new ScrollMagic.Scene({
  triggerElement: "#projects",
  triggerHook: 0.9
})
.setTween(gsap.from(".project-card", { scale: 0.8, opacity: 0, duration: 1, stagger: 0.3 }))
.addTo(controller);