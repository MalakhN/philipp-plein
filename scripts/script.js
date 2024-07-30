const footerMenuTitles = document.querySelectorAll(".footer__menu-title");

for (let i = 0; i < footerMenuTitles.length; ++i) {
  const footerMenuTitle = footerMenuTitles[i]
  footerMenuTitle.addEventListener('click', e => {
    const targetElem = e.target;
    targetElem.closest('.footer__menu-container').classList.toggle('footer__menu-container_active');
  })
}
