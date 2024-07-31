const footerMenuTitles = document.querySelectorAll(".footer__menu-title");
const footerMenuItems = document.querySelectorAll(".footer__menu-items");

for (let i = 0; i < footerMenuTitles.length; ++i) {
  const footerMenuTitle = footerMenuTitles[i]

  footerMenuTitle.addEventListener('click', e => {
    const targetElem = e.target;
    const openedElem = targetElem.nextElementSibling;

    if(openedElem.style.maxHeight) {
      footerMenuTitles.forEach((el) => el.classList.remove('footer__menu-title_active'));
      targetElem.classList.remove('footer__menu-title_active');
      footerMenuItems.forEach((el) => el.style.maxHeight = null);
      openedElem.style.maxHeight = null;
    } else {
      footerMenuTitles.forEach((el) => el.classList.remove('footer__menu-title_active'));
      targetElem.classList.add('footer__menu-title_active');
      footerMenuItems.forEach((el) => el.style.maxHeight = null);
      openedElem.style.maxHeight = openedElem.scrollHeight + 'px';
    }
  })
}
