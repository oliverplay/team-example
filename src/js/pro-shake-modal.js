(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-shake]"),
    closeModalBtn: document.querySelector("[data-modal-close-shake]"),
    modal: document.querySelector("[data-modal-shake]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();