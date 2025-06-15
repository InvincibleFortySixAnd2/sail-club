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

