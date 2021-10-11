const effectivesolutiontitleButtonRef = document.querySelector(".effective-solution-title-button");
const modalCloseRef = document.querySelector(".modal__close");
const wrapperModalRef = document.querySelector(".wrapper-modal");

function updateClassWrapper() {
  wrapperModalRef.classList.toggle("is-hidden");
}
effectivesolutiontitleButtonRef.addEventListener("click", updateClassWrapper);
modalCloseRef.addEventListener("click", updateClassWrapper);

