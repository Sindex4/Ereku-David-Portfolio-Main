const navWrap = document.querySelector('.nav-wrap');
const progress = document.getElementById('progress');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function scrollUI() {
  navWrap.classList.toggle('scrolled', scrollY > 20);
  const height = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${height > 0 ? (scrollY / height) * 100 : 0}%`;
}

function addProjects() {
  const projectGrid = document.querySelector('.project-grid');
  if (!projectGrid) return;

  const neoLink = document.querySelector('.project-featured .project-link');
  if (neoLink) neoLink.href = 'https://neo-ea88dc.webflow.io/';

  const liveProjects = [
    ['04', 'Blue Pepper', 'WEB EXPERIENCE', 'pepper-visual', 'A polished, brand-forward website demo with a responsive layout and a clear, modern visual direction.', 'https://blue-pepper-demo.vercel.app/'],
    ['05', 'Cedar House', 'WEBSITE DEMO', 'cedar-visual', 'A refined website demo designed to make content easy to explore across desktop and mobile screens.', 'https://cedar-house-website.vercel.app/'],
    ['06', 'Swift Pick Mall', 'E-COMMERCE', 'swift-visual', 'A shopping-mall website demo that presents products and categories in a straightforward, responsive experience.', 'https://swift-pick-three.vercel.app/'],
    ['07', 'Silverdale Schools', 'EDUCATION', 'school-visual', 'A school website designed to give students, parents and visitors a clear introduction to the institution.', 'https://sd-psi-ashen.vercel.app/']
  ];

  liveProjects.forEach(([number, name, type, visual, description, url]) => {
    const liveProject = document.createElement('article');
    liveProject.className = 'project project-small reveal';
    liveProject.innerHTML = `<div class="project-visual live-visual ${visual}"><span class="visual-index">${number}</span><strong>${name}</strong><small>LIVE ON VERCEL ↗</small></div><div class="project-info"><div class="project-top"><span>${number}</span><span>${type}</span></div><h3>${name}</h3><p>${description}</p><div class="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div><a class="project-link" href="${url}" target="_blank" rel="noopener">View live site <span>↗</span></a></div>`;
    projectGrid.append(liveProject);
  });

  const project = document.createElement('article');
  project.className = 'project project-small project-ai reveal';
  project.innerHTML = `
    <div class="project-visual face-visual" aria-label="Facial recognition project illustration">
      <div class="face-grid"></div>
      <div class="face-frame"><i></i><i></i><i></i><i></i><div class="face-scan"></div><span>FACE ID</span></div>
      <div class="scan-readout"><b>01</b><small>IDENTITY MATCH</small></div>
    </div>
    <div class="project-info">
      <div class="project-top"><span>08</span><span>AI / COMPUTER VISION</span></div>
      <h3>Face Recognition</h3>
      <p>An AI facial-recognition program built for local use. It needs its recognition model, dependencies and runtime service to operate.</p>
      <div class="project-tags"><span>Python</span><span>Computer Vision</span><span>AI</span></div>
      <p class="project-note"><span>●</span> Local/backend setup required — not a Vercel-only demo.</p>
      <a class="project-link" href="https://github.com/Sindex4/AI-Face-Recognition" target="_blank" rel="noopener">View source on GitHub <span>↗</span></a>
    </div>`;
  projectGrid.append(project);
}

addProjects();
addEventListener('scroll', scrollUI, { passive: true });
scrollUI();

menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();
