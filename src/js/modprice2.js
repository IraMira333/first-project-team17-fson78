(() => {
  const refs = {
    openModprice2Btn: document.querySelector('[data-modprice2-open]'),
    closeModprice2Btn: document.querySelector('[data-modprice2-close]'),
    modprice2: document.querySelector('[data-modprice2]'),
    body: document.querySelector('body'),
  };

  refs.openModprice2Btn.addEventListener('click', toggleModprice2);
  refs.closeModprice2Btn.addEventListener('click', toggleModprice2);

  function toggleModprice2() {
    refs.modprice2.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
