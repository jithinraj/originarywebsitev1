
const header = document.querySelector('.site-header');
addEventListener('scroll', () => {
  const y = scrollY;
  header.style.boxShadow = y>10 ? '0 10px 30px rgba(0,0,0,.35)' : 'none';
});
