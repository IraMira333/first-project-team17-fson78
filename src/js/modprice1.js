(() => {
  const refs = {
    openModpriceoneBtn: document.querySelector('[data-modpriceone-open]'),
    closeModpriceoneBtn: document.querySelector('[data-modpriceone-close]'),
    modpriceone: document.querySelector('[data-modpriceone]'),
    body: document.querySelector('body'),
  };

  refs.openModpriceoneBtn.addEventListener('click', toggleModpriceone);
  refs.closeModpriceoneBtn.addEventListener('click', toggleModpriceone);

  function toggleModpriceone() {
    refs.modpriceone.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
