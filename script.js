const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}

// Hero: keep the official YBM promotional image fully visible without cropping.
const heroFrame = document.querySelector('.portrait-frame');
const heroImage = heroFrame?.querySelector('img');
const portraitCard = document.querySelector('.portrait-card');

if (heroFrame && heroImage) {
  heroFrame.style.aspectRatio = '1 / 1';
  heroFrame.style.width = 'min(100%, 500px)';
  heroFrame.style.background = '#fff';
  heroFrame.style.border = '10px solid rgba(255,255,255,.96)';
  heroFrame.style.borderRadius = '34px';

  heroImage.src = 'https://upsisa.ybmnet.co.kr/si/ybmedu_com/new/team/6a3aece8d86e3.png';
  heroImage.alt = 'YBM 강남 정지영 IELTS 공식 홍보 이미지';
  heroImage.style.width = '100%';
  heroImage.style.height = '100%';
  heroImage.style.objectFit = 'contain';
  heroImage.style.objectPosition = 'center';
  heroImage.style.transform = 'none';
}

if (portraitCard) {
  portraitCard.style.minHeight = '520px';
}

document.querySelectorAll('.floating-card').forEach((card) => {
  card.style.display = 'none';
});

// Kakao: use the official open-chat URL listed on the YBM instructor page.
// Same-tab navigation is more reliable on mobile browsers than opening a popup/new tab.
const kakaoUrl = 'https://open.kakao.com/o/sCmOcfTh';

document.querySelectorAll('a[href*="open.kakao.com"]').forEach((link) => {
  link.href = kakaoUrl;
  link.removeAttribute('target');
  link.removeAttribute('rel');
  link.setAttribute('aria-label', `${link.textContent.trim()} - 카카오톡 1:1 오픈채팅`);

  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.assign(kakaoUrl);
  });
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
