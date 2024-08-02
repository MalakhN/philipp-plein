const menBtnContents = document.querySelectorAll('.btn-men');
const womenBtnContents = document.querySelectorAll('.btn-women');

function changeContentMen() {
  document.querySelector('.sale-filter__switcher-btn.btn-men').classList.add('sale-filter__switcher-btn_active');
  document.querySelector('.sale-filter__switcher-btn.btn-women').classList.remove('sale-filter__switcher-btn_active');

  document.querySelector('.sale-shoes__img').src = './images/SNEAKERS1.png';
  vipList.renderItems(vipSliderMenImgs);
  document.querySelector('.sale-clothes__img').src = './images/MattiaGuolo_PHILIPPLEIN_22092023_LIFESTYLE_02_0571 1.png';
  clothesList.renderItems(clothesSliderMenImgs);
  categoriesList.renderItems(categoriesSliderMenImgs);
  runwayList.renderItems(runwaySliderMenImgs);
}

function changeContentWomen() {
  document.querySelector('.sale-filter__switcher-btn.btn-men').classList.remove('sale-filter__switcher-btn_active');
  document.querySelector('.sale-filter__switcher-btn.btn-women').classList.add('sale-filter__switcher-btn_active');

  document.querySelector('.sale-shoes__img').src = './images/women_heels.png';
  vipList.renderItems(vipSliderWomenImgs);
  document.querySelector('.sale-clothes__img').src = './images/w-clothes-banner.png';
  clothesList.renderItems(clothesSliderWomenImgs);
  categoriesList.renderItems(categoriesSliderWomenImgs);
  runwayList.renderItems(runwaySliderWomenImgs);
}

for (let i = 0; i < menBtnContents.length; ++i) {
  const menBtnContent = menBtnContents[i]
  menBtnContent.onclick = changeContentMen;
}

for (let i = 0; i < womenBtnContents.length; ++i) {
  const womenBtnContent = womenBtnContents[i]
  womenBtnContent.onclick = changeContentWomen;
}



