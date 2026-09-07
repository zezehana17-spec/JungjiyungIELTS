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

if (portraitCard) portraitCard.style.minHeight = '520px';

document.querySelectorAll('.floating-card').forEach((card) => {
  card.style.display = 'none';
});

// About: keep the instructor portrait only in the hero and make this section text-led.
const aboutMedia = document.querySelector('.about-media');
const aboutGrid = document.querySelector('.about-grid');
const aboutCopy = document.querySelector('.about-copy');

if (aboutMedia) aboutMedia.style.display = 'none';
if (aboutGrid) {
  aboutGrid.style.gridTemplateColumns = 'minmax(0, 1fr)';
  aboutGrid.style.gap = '0';
}
if (aboutCopy) {
  aboutCopy.style.maxWidth = '900px';
  aboutCopy.style.marginInline = 'auto';
}

// Kakao: use same-tab navigation for more reliable mobile handling.
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

// Expanded review section based on publicly available YBM course reviews.
const reviewStories = [
  {
    score: 'Overall 7.0',
    accent: 'L 7.5 · R 7.0 · W 6.5 · S 6.0',
    name: '유*해',
    date: '2026.09',
    course: '중고급 · 2개월',
    title: 'IELTS를 처음 시작해 두 달 만에 Overall 7.0',
    body: 'IELTS 자체가 처음인 상태에서 시작해 두 달 뒤 Overall 7.0을 달성했습니다. Speaking은 파트별 질문을 실제로 말하며 연습하고, Writing은 직접 만든 답변을 꼼꼼히 교정받은 점을 특히 도움이 된 부분으로 꼽았습니다.',
    tags: ['완전 초보 시작', 'Speaking 실전', 'Writing 첨삭']
  },
  {
    score: 'Overall 7.5',
    accent: '목표 7.0 이상 달성',
    name: '유*영',
    date: '2026.05',
    course: '초중급 · 직장인 저녁반',
    title: '직장과 병행하며 목표보다 높은 Overall 7.5',
    body: '약 10년 만에 다시 영어 공부를 시작한 직장인 수강생 사례입니다. 평일 저녁 수업을 두 달간 꾸준히 수강했고, 목표했던 Overall 7.0을 넘어 7.5를 달성했습니다. 명확한 수업 흐름과 지속적인 격려를 장점으로 언급했습니다.',
    tags: ['직장인', '저녁반', '목표 초과 달성']
  },
  {
    score: 'Overall 7.0',
    accent: 'Writing 6.5',
    name: '이*환',
    date: '2026.08',
    course: '중고급 · 단기 준비',
    title: '짧은 준비 기간에도 목표 Overall 7.0 달성',
    body: '약 한 달의 비교적 짧은 준비 기간에도 목표 점수를 달성했습니다. 자주 나오지 않는 유형까지 미리 대비한 것이 실제 시험에서 도움이 되었고, Writing에서는 수업에서 배운 표현을 적용해 6.5를 받았습니다.',
    tags: ['단기 준비', '시험 유형 대비', 'Writing 6.5']
  },
  {
    score: 'Overall 7.0',
    accent: '토요반 · 2개월',
    name: '이*한',
    date: '2026.07',
    course: '초중급 · 토요반',
    title: '토요반으로 준비해 두 달 만에 7.0',
    body: '교환학생 준비를 위해 주말 수업으로 시작한 사례입니다. 영역별 약점을 진단받고 보완 자료와 구체적인 솔루션을 받은 점, 특히 시험 직전까지 Writing과 Speaking 교정이 이어진 점을 좋은 결과의 이유로 꼽았습니다.',
    tags: ['토요반', '개별 솔루션', '시험 직전 피드백']
  },
  {
    score: 'Overall 6.5',
    accent: '목표 점수 달성',
    name: '정*라',
    date: '2026.03',
    course: 'Academic',
    title: '맞춤형 밀착관리로 목표 6.5 달성',
    body: '짧은 기간 안에 필요한 부분에 집중해 Overall 6.5를 달성한 사례입니다. Writing 구조를 잡는 과정과 실제 시험에 적용할 수 있는 포인트, Reading과 Listening에서 중요한 부분을 선별해 공부한 점을 효과적으로 평가했습니다.',
    tags: ['Academic', '밀착관리', 'Writing 구조']
  },
  {
    score: 'Overall 6.5',
    accent: '약 2개월',
    name: '김*은',
    date: '2026.03',
    course: 'Academic',
    title: 'IELTS를 모르던 상태에서 두 달 후 6.5',
    body: '시험 유형도 모르는 상태에서 약 두 달 동안 준비해 목표였던 Overall 6.5를 달성했습니다. 특히 Speaking이 점차 편해지고 실력 향상을 체감했으며, Writing은 구조를 잡는 데 수업이 도움이 되었다고 했습니다.',
    tags: ['2개월', 'Speaking 향상', '소수정예']
  },
  {
    score: 'Overall 6.0',
    accent: '초중급',
    name: '최*원',
    date: '2026.08',
    course: '초중급',
    title: '참여형 수업으로 Overall 6.0 달성',
    body: '수업 중 계속 참여할 수 있도록 질문과 활동이 이어져 지루하지 않았다는 후기입니다. 수업 마지막까지 할 수 있다는 격려를 받으며 준비했고 Overall 6.0을 달성했습니다.',
    tags: ['참여형 수업', '초중급', 'Overall 6.0']
  },
  {
    score: 'IELTS 첫 시작',
    accent: '1개월 후 유형 감각 형성',
    name: '이*현',
    date: '2026.02',
    course: '초중급',
    title: '처음 준비하는 IELTS, 영역별 접근법부터',
    body: 'IELTS가 처음이라 막막했던 수강생이 한 달 동안 Reading·Listening·Speaking·Writing의 유형을 정리하면서 시험 감을 잡은 사례입니다. 개인별 약점을 찾아 접근법을 알려주는 점을 큰 도움으로 꼽았습니다.',
    tags: ['IELTS 입문', '4영역 유형 분석', '개별 약점 진단']
  }
];

const reviewsSection = document.getElementById('reviews');

if (reviewsSection) {
  const reviewsContainer = reviewsSection.querySelector('.container');

  if (reviewsContainer) {
    reviewsContainer.innerHTML = `
      <div class="section-heading reveal">
        <div>
          <div class="section-label">STUDENT RESULTS</div>
          <h2>점수와 변화로 보는<br /><em>수강생 리얼 후기</em></h2>
        </div>
        <p>YBM에 공개된 실제 수강후기를 바탕으로, 목표 점수와 수강 과정에서 반복적으로 확인되는 변화만 핵심적으로 정리했습니다.</p>
      </div>

      <div class="review-proof-bar reveal" aria-label="수강 후기 주요 결과">
        <div><strong>121</strong><span>YBM 공개 수강후기</span></div>
        <div><strong>7.5</strong><span>공개 후기 최고 Overall 사례</span></div>
        <div><strong>2개월</strong><span>7.0 · 6.5 달성 사례</span></div>
        <div><strong>1:1</strong><span>Speaking · Writing 피드백</span></div>
      </div>

      <div class="review-grid review-grid-expanded" id="review-grid">
        ${reviewStories.map((review, index) => `
          <article class="review-card review-story ${index >= 3 ? 'review-extra' : ''}" data-review-index="${index}">
            <div class="review-story-top">
              <div class="review-score">${review.score}</div>
              <span class="review-accent">${review.accent}</span>
            </div>
            <div class="review-story-meta">
              <span>${review.name}</span>
              <span>${review.date}</span>
              <span>${review.course}</span>
            </div>
            <h3>${review.title}</h3>
            <p>${review.body}</p>
            <div class="review-story-tags">
              ${review.tags.map((tag) => `<span>${tag}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>

      <div class="review-more-wrap reveal">
        <button class="review-more-button" id="review-more-button" type="button" aria-expanded="false">
          후기 더보기 <span class="review-more-count">+5</span>
        </button>
        <a class="review-original-link" href="https://www.ybmedu.com/kangnam/jiyoungIELTS" target="_blank" rel="noopener">
          YBM 후기 원문 전체 보기 <span>↗</span>
        </a>
      </div>

      <div class="review-summary reveal">
        <div class="review-summary-main">
          <strong>공개 후기에서 반복해서 보이는 강점</strong>
          <div class="review-chips">
            <span>피드백이 상세해요</span>
            <span>목표 달성에 도움이 돼요</span>
            <span>실전 대비가 잘돼요</span>
            <span>실력이 빠르게 늘어요</span>
            <span>수업 분위기가 좋아요</span>
          </div>
        </div>
      </div>
      <p class="source-note source-note-left">* 위 내용은 YBM 공개 수강후기의 점수·수강 정보·핵심 경험을 요약해 구성했습니다. 전체 원문은 YBM 공식 페이지에서 확인할 수 있습니다.</p>
    `;
  }
}

const reviewStyle = document.createElement('style');
reviewStyle.textContent = `
  .review-proof-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    margin: 42px 0 28px;
    overflow: hidden;
    border: 1px solid #e9e4ef;
    border-radius: 24px;
    background: #e9e4ef;
  }
  .review-proof-bar > div {
    min-height: 108px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 18px 12px;
    background: #fff;
    text-align: center;
  }
  .review-proof-bar strong {
    color: #5d3ce7;
    font-size: 29px;
    line-height: 1;
    letter-spacing: -.05em;
  }
  .review-proof-bar span {
    margin-top: 8px;
    color: #746c80;
    font-size: 11px;
    font-weight: 700;
  }
  #reviews .review-grid-expanded {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }
  #reviews .review-story {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 28px;
    border: 1px solid #e9e4ef;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0 12px 34px rgba(42,23,79,.055);
  }
  #reviews .review-story:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 42px rgba(42,23,79,.09);
  }
  .review-story-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  #reviews .review-score {
    color: #5d3ce7;
    font-size: 21px;
    font-weight: 900;
    letter-spacing: -.04em;
  }
  .review-accent {
    padding: 7px 10px;
    border-radius: 999px;
    background: #f4efff;
    color: #6f4cff;
    font-size: 10px;
    font-weight: 850;
    white-space: nowrap;
  }
  .review-story-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 7px 14px;
    margin-top: 18px;
    color: #918999;
    font-size: 11px;
    font-weight: 700;
  }
  .review-story h3 {
    margin: 15px 0 10px;
    color: #171225;
    font-size: 20px;
    line-height: 1.38;
    letter-spacing: -.035em;
  }
  .review-story p {
    margin: 0;
    color: #655e70;
    font-size: 14px;
    line-height: 1.78;
  }
  .review-story-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: auto;
    padding-top: 20px;
  }
  .review-story-tags span {
    padding: 7px 10px;
    border-radius: 999px;
    background: #faf8fc;
    color: #746c80;
    font-size: 10px;
    font-weight: 750;
  }
  .review-extra[hidden] { display: none !important; }
  .review-more-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
  }
  .review-more-button {
    min-width: 180px;
    min-height: 50px;
    padding: 0 20px;
    border: 0;
    border-radius: 999px;
    background: #211b35;
    color: #fff;
    font: inherit;
    font-size: 13px;
    font-weight: 850;
    cursor: pointer;
    transition: transform .18s ease, background .18s ease;
  }
  .review-more-button:hover {
    transform: translateY(-2px);
    background: #6f4cff;
  }
  .review-more-count {
    margin-left: 5px;
    color: #d9ceff;
  }
  .review-original-link {
    color: #6f4cff;
    font-size: 12px;
    font-weight: 850;
  }
  #reviews .review-summary { margin-top: 30px; }
  @media (max-width: 820px) {
    .review-proof-bar { grid-template-columns: repeat(2, 1fr); }
    #reviews .review-grid-expanded { grid-template-columns: 1fr; }
  }
  @media (max-width: 560px) {
    .review-proof-bar > div { min-height: 92px; }
    .review-proof-bar strong { font-size: 24px; }
    #reviews .review-story { padding: 22px; }
    .review-story-top { align-items: flex-start; flex-direction: column; }
    .review-more-wrap { flex-direction: column; }
  }
`;
document.head.appendChild(reviewStyle);

const extraReviews = Array.from(document.querySelectorAll('.review-extra'));
const reviewMoreButton = document.getElementById('review-more-button');
const INITIAL_VISIBLE = 3;
const BATCH_SIZE = 3;
let visibleReviews = INITIAL_VISIBLE;

extraReviews.forEach((card) => {
  card.hidden = true;
});

function syncReviewButton() {
  if (!reviewMoreButton) return;
  const total = reviewStories.length;
  const remaining = Math.max(0, total - visibleReviews);

  if (remaining === 0) {
    reviewMoreButton.innerHTML = '후기 접기 <span class="review-more-count">↑</span>';
    reviewMoreButton.setAttribute('aria-expanded', 'true');
  } else {
    reviewMoreButton.innerHTML = `후기 더보기 <span class="review-more-count">+${remaining}</span>`;
    reviewMoreButton.setAttribute('aria-expanded', 'false');
  }
}

if (reviewMoreButton) {
  syncReviewButton();

  reviewMoreButton.addEventListener('click', () => {
    if (visibleReviews >= reviewStories.length) {
      visibleReviews = INITIAL_VISIBLE;
      extraReviews.forEach((card) => { card.hidden = true; });
      syncReviewButton();
      reviewsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const nextVisible = Math.min(visibleReviews + BATCH_SIZE, reviewStories.length);
    document.querySelectorAll('.review-story').forEach((card, index) => {
      if (index < nextVisible) card.hidden = false;
    });
    visibleReviews = nextVisible;
    syncReviewButton();
  });
}

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
