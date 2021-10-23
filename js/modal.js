const wrapperModalRef = document.querySelector('.wrapper-modal');
const modalCloseRef = document.querySelector('.modal-close');
const effectivesolutiontitleButtonRef = document.querySelector('.effective-solution-title-button');


function uptadeClassElement () {
    wrapperModalRef.classList.toggle ("is-hidden");
}

modalCloseRef.addEventListener("click", uptadeClassElement);
effectivesolutiontitleButtonRef.addEventListener("click", uptadeClassElement)