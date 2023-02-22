(() => {
  const refs = {
    openModroom1Btn: document.querySelector('[data-modroom1-open]'),
    closeModroom1Btn: document.querySelector('[data-modroom1-close]'),
    modroom1: document.querySelector('[data-modroom1]'),
    body: document.querySelector('body'),
  };

  refs.openModroom1Btn.addEventListener('click', toggleModroom1);
  refs.closeModroom1Btn.addEventListener('click', toggleModroom1);

  function toggleModroom1() {
    refs.modroom1.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
