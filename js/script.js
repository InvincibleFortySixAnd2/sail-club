// Theme

const themeButtonLight = document.querySelector('.theme-button-light');
const themeButtonDark = document.querySelector('.theme-button-dark');

themeButtonLight.addEventListener('click', () => {
  document.body.classList.remove('dark');
  themeButtonLight.classList.add('active');
  themeButtonDark.classList.remove('active');
});

themeButtonDark.addEventListener('click', () => {
  document.body.classList.add('dark');
  themeButtonLight.classList.remove('active');
  themeButtonDark.classList.add('active');
});

// Fonts

const fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
const fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSansSerif.addEventListener('click', () => {
  document.body.classList.remove('serif');
  fontButtonSansSerif.classList.add('active');
  fontButtonSerif.classList.remove('active');
});

fontButtonSerif.addEventListener('click', () => {
  document.body.classList.add('serif');
  fontButtonSansSerif.classList.remove('active');
  fontButtonSerif.classList.add('active');
});


// Articles

const blogArticles = document.querySelectorAll('.blog-article');
for (const blogArticle of blogArticles) {
  const moreButton = blogArticle.querySelector('.more');

  moreButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    blogArticle.classList.remove('short');
  });
};


// Cards layout

const cardViewButtonGrid = document.querySelector('.card-view-button-grid');
const cardViewButtonList = document.querySelector('.card-view-button-list');
const cardsList = document.querySelector('.cards');

cardViewButtonGrid.addEventListener('click', () => {
  cardsList.classList.remove('list');
  cardViewButtonGrid.classList.add('active');
  cardViewButtonList.classList.remove('active');
});

cardViewButtonList.addEventListener('click', () => {
  cardsList.classList.add('list');
  cardViewButtonGrid.classList.remove('active');
  cardViewButtonList.classList.add('active');
});


// Gallery

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list li a');

for (let preview of previews) {
  preview.onclick = (evt) => {
    evt.preventDefault();
    activePhoto.src = preview.href;
  
    let currentActivePreview = document.querySelector('.preview-list li .active-item');
    currentActivePreview.classList.remove('active-item');
    preview.classList.add('active-item');
  };
}