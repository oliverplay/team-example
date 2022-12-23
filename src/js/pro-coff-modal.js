(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-coff]"),
    closeModalBtn: document.querySelector("[data-modal-close-coff]"),
    modal: document.querySelector("[data-modal-coff]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();