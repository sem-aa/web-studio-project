 function openMenu() {
   const menuBtnRef = document.querySelector("[data-menu-button]")
   const mobileMenuRef = document.querySelector("[data-menu]")
   menuBtnRef.addEventListener("click", () => {
    
     const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
     menuBtnRef.classList.toggle("is-open")
     menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
})
}
openMenu()

function openModal() {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", () => {
    document.body.classList.add('modal-open')
    refs.modal.classList.toggle("is-hidden");
  });
  refs.closeModalBtn.addEventListener("click", () => {
    document.body.classList.remove('modal-open')
    refs.modal.classList.toggle("is-hidden");
  });

  
}
  openModal();