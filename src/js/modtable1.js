(() => {
  const refs = {
    openModtable1Btn: document.querySelector('[data-modtable1-open]'),
    closeModtable1Btn: document.querySelector('[data-modtable1-close]'),
    modtable1: document.querySelector('[data-modtable1]'),
    body: document.querySelector("body"),
  };

  refs.openModtable1Btn.addEventListener('click', toggleModtable1);
  refs.closeModtable1Btn.addEventListener('click', toggleModtable1);

  function toggleModtable1() {
    refs.modtable1.classList.toggle('is-hidden');
    refs.body.classList.toggle("no-scroll");
  }
})();
