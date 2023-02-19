(() => {
  const refs = {
    openModroomBtn: document.querySelector('[data-modroom-open]'),
    closeModroomBtn: document.querySelector('[data-modroom-close]'),
    modroom: document.querySelector('[data-modroom]'),
  };

  refs.openModroomBtn.addEventListener('click', toggleModroom);
  refs.closeModroomBtn.addEventListener('click', toggleModroom);

  function toggleModroom() {
    refs.modroom.classList.toggle('is-hidden');
  }
})();
