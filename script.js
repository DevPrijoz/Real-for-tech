// Animação para o header
gsap.from("header", { duration: 1, y: -50, opacity: 0 });

// Animação para os cards de serviços
gsap.from(".card", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });

// Animação para o formulário de contato
gsap.from("#contato form", { duration: 1, x: -50, opacity: 0 });

// Animação para o footer
gsap.from("footer", { duration: 1, y: 50, opacity: 0 });