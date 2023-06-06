const elSiteNavOpener = document.querySelector('.sitenav-opener');
const elSiteNavList = document.querySelector('.sitenav-list');

elSiteNavOpener.addEventListener('click', function () {
  elSiteNavOpener.classList.toggle('sitenav-opener-active')
  elSiteNavList.classList.toggle('sitenav-list-open')
})