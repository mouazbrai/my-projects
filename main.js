/* start jumbotron tabs script */
const jumboBtns = document.querySelectorAll('.jumbo-btn');
const jumboPanes = document.querySelectorAll('.jumbo-pane');

jumboBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    jumboBtns.forEach(b => b.classList.remove('active'));
    jumboPanes.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
/* end jumbotron tabs script */

/* start projects slider script */
const projectCategories = [
  {
    id: 'web-development',
    tag: 'CATEGORY 01',
    title: 'WEB DEVELOPMENT & SOFTWARE',
    type: 'web',
    items: [
      {
        title: 'Amina Ziani Portfolio',
        img: 'images/web/img1.jpg',
        url: 'https://aminazianii.github.io/portfolio/',
        projectType: 'Responsive Portfolio Website',
        description: 'Custom interactive portfolio developed and optimized by Mouaz Brai with smooth navigation and high performance.',
        tech: 'HTML5 · CSS3 · Vanilla JavaScript'
      },
      {
        title: 'Electronica E-Commerce Store',
        img: 'images/web/img2.jpg',
        url: 'https://launchcraft-studio.github.io/mystore-electronica/',
        projectType: 'E-Commerce Web Application',
        description: 'Dynamic online store featuring product filtering, cart management, and order tracking built by Mouaz Brai.',
        tech: 'HTML5 · CSS3 · JavaScript · Supabase API'
      },
      {
        title: 'CFPA Baraki Graduation Project',
        img: 'images/web/img3.jpg',
        url: 'https://mouazbrai.github.io/cfpa-beraki/',
        projectType: 'Static & Mobile Web Interface',
        description: 'Applied final training project by Mouaz Brai focused on responsive layout and user experience.',
        tech: 'HTML5 · CSS3 · Responsive Design'
      }
    ]
  },
  {
    id: 'graphic-design',
    tag: 'CATEGORY 02',
    title: 'GRAPHIC DESIGN & PRINT PRODUCTION',
    type: 'graphic',
    items: [
      {
        title: 'Zuno Brand Identity & Mockups',
        img: 'images/graphic/card-1-brand-identity-zuno.png',
        categoryLabel: 'Brand Identity & Web Mockup',
        description: 'Comprehensive brand identity system designed by Mouaz Brai including restaurant menus, business cards, and digital preview interfaces.',
        tools: 'Adobe Illustrator · Photoshop · Prepress'
      },
      {
        title: 'Logo Design & Brand Marks',
        img: 'images/graphic/card-2-logo-design-brand-marks.png',
        categoryLabel: 'Logo Design Collection',
        description: 'Distinctive brand marks and visual logos crafted by Mouaz Brai including Zimo, Douceurs de Rêve, Random, and A Studio.',
        tools: 'Adobe Illustrator · Vector Art · Photoshop'
      },
      {
        title: 'Print Packaging & Commercial Ads',
        img: 'images/graphic/card-3-print-packaging.png',
        categoryLabel: 'Print Production & Packaging',
        description: 'Commercial packaging design by Mouaz Brai, snack wrappers (Munchips), promotional flyers, and structured order forms.',
        tools: 'Prepress · Offset Printing · CMYK'
      },
      {
        title: 'Social Media & Digital Ads',
        img: 'images/graphic/card-4-social-media-digital-ads.png',
        categoryLabel: 'Social Media Campaign',
        description: 'High-impact digital marketing visuals and social media advertisement creatives designed by Mouaz Brai for food and local brands.',
        tools: 'Adobe Illustrator · Vector Art'
      }
    ]
  }
];

const slidesWrapper = document.getElementById('slides-wrapper');
const sliderDots = document.getElementById('slider-dots');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let currentSlide = 0;

function buildSlides() {
  if (!slidesWrapper || !sliderDots) return;

  projectCategories.forEach((cat, index) => {
    const slide = document.createElement('div');
    slide.className = `project-slide ${index === 0 ? 'active' : ''}`;
    slide.id = cat.id;

    let cardsHTML = '';
    cat.items.forEach((item) => {
      const imageFilename = item.img;

      if (cat.type === 'web') {
        cardsHTML += `
          <div class="project-card web-card">
            <div class="card-img-box">
              <img src="${imageFilename}" alt="${item.title}" class="work-img" loading="lazy" onerror="handleImgFallback(this)">
              <div class="card-overlay">
                <span class="overlay-type">${item.projectType}</span>
                <p class="overlay-desc">${item.description}</p>
                <div class="overlay-tech">${item.tech}</div>
              </div>
            </div>
            <div class="card-info">
              <h3 class="card-title">${item.title}</h3>
              <a href="${item.url}" target="_blank" class="card-btn">Live Preview <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        `;
      } else {
        cardsHTML += `
          <div class="project-card graphic-card">
            <div class="card-img-box">
              <img src="${imageFilename}" alt="${item.title}" class="work-img" loading="lazy" onerror="handleImgFallback(this)">
              <div class="card-overlay">
                <span class="overlay-type">${item.categoryLabel}</span>
                <p class="overlay-desc">${item.description}</p>
                <div class="overlay-tech">${item.tools}</div>
              </div>
            </div>
            <div class="card-info">
              <h3 class="card-title">${item.title}</h3>
            </div>
          </div>
        `;
      }
    });

    slide.innerHTML = `
      <div class="slide-header">
        <span class="slide-tag">${cat.tag}</span>
        <h3 class="slide-title">${cat.title}</h3>
      </div>
      <div class="cards-grid count-${cat.items.length}">
        ${cardsHTML}
      </div>
    `;

    slidesWrapper.appendChild(slide);

    const dot = document.createElement('span');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    sliderDots.appendChild(dot);
  });
}

window.handleImgFallback = function(img) {
  if (!img.dataset.triedPng) {
    img.dataset.triedPng = 'true';
    img.src = img.src.replace('.jpg', '.png');
  } else if (!img.dataset.triedWebp) {
    img.dataset.triedWebp = 'true';
    img.src = img.src.replace('.png', '.webp');
  } else {
    img.src = 'logo.png';
    img.style.objectFit = 'contain';
    img.style.padding = '30px';
  }
};

function goToSlide(index) {
  const slides = document.querySelectorAll('.project-slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

if (prevArrow && nextArrow) {
  prevArrow.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextArrow.addEventListener('click', () => goToSlide(currentSlide + 1));
}

buildSlides();
/* end projects slider script */