const refs = {
  moviesItemElt: document.querySelector('.movies__list-item'),
  backdropElt: document.querySelector('.backdrop'),
  closeModalBtnElt: document.querySelector('.modal-close'),
};

refs.moviesItemElt.addEventListener('click', onOpenModal);
refs.closeModalBtnElt.addEventListener('click', onCloseModal);
refs.backdropElt.addEventListener('click', onBackdropClick);

// открытие модального окна
function onOpenModal(e) {
  window.addEventListener('keydown', onEscKeyDown);
  refs.backdropElt.classList.add('show-modal');
}

// закрытие модального окна по клику на кнопку закрытия
function onCloseModal(e) {
  window.removeEventListener('keydown', onEscKeyDown);
  refs.backdropElt.classList.remove('show-modal');
  // const
}

// закрытие модального окна по клику на бекдроп
function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

// закрытие модального окна при нажатии на escape
function onEscKeyDown(e) {
  // console.log(e.key);
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
