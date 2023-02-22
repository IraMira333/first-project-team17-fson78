(() => {
  const refs = {
    openModprice1Btn: document.querySelector('[data-modprice1-open]'),
    closeModprice1Btn: document.querySelector('[data-modprice1-close]'),
    modprice1: document.querySelector('[data-modprice1]'),
    body: document.querySelector('body'),
  };

  refs.openModprice1Btn.addEventListener('click', toggleModprice1);
  refs.closeModprice1Btn.addEventListener('click', toggleModprice1);

  function toggleModprice1() {
    refs.modprice1.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
