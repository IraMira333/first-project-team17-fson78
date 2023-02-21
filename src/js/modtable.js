(() => {
  const refs = {
    openModtableBtn: document.querySelector('[data-modtable-open]'),
    closeModtableBtn: document.querySelector('[data-modtable-close]'),
    modtable: document.querySelector('[data-modtable]'),
    body: document.querySelector("body"),
  };

  refs.openModtableBtn.addEventListener('click', toggleModtable);
  refs.closeModtableBtn.addEventListener('click', toggleModtable);

  function toggleModtable() {
    refs.modtable.classList.toggle('is-hidden');
    refs.body.classList.toggle("no-scroll");
  }
})();
