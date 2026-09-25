const navLinks = document.querySelectorAll('nav a');
const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, {rootMargin:'-35% 0px -55% 0px', threshold:0});

sections.forEach(section => observer.observe(section));
