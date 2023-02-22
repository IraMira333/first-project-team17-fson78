(() => {
  const refs = {
    openModprice3Btn: document.querySelector('[data-modprice3-open]'),
    closeModprice3Btn: document.querySelector('[data-modprice3-close]'),
    modprice3: document.querySelector('[data-modprice3]'),
    body: document.querySelector('body'),
  };

  refs.openModprice3Btn.addEventListener('click', toggleModprice3);
  refs.closeModprice3Btn.addEventListener('click', toggleModprice3);

  function toggleModprice3() {
    refs.modprice3.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
