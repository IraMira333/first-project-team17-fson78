(() => {
  const refs = {
    openModpriceBtn: document.querySelector('[data-modprice-open]'),
    closeModpriceBtn: document.querySelector('[data-modprice-close]'),
    modprice: document.querySelector('[data-modprice]'),
    body: document.querySelector('body'),
  };

  refs.openModpriceBtn.addEventListener('click', toggleModprice);
  refs.closeModpriceBtn.addEventListener('click', toggleModprice);

  function toggleModprice() {
    refs.modprice.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
