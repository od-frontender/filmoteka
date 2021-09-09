const refs = {
  moviesListElt: document.querySelector('.movies__list'),
  moviesItemElt: document.querySelector('.movies__list-item'),
  backdropElt: document.querySelector('.backdrop'),
  closeModalBtnElt: document.querySelector('.modal-close'),
};

refs.moviesListElt.addEventListener('click', onOpenModal);
// refs.moviesItemElt.addEventListener('click', onOpenModal);
// refs.closeModalBtnElt.addEventListener('click', onCloseModal);
refs.backdropElt.addEventListener('click', onBackdropClick);

// открытие модального окна
function onOpenModal(e) {
  if (e.currentTarget !== e.target) {
    refs.backdropElt.classList.add('show-modal');

    // console.dir(refs.moviesListElt.children);
    console.dir(e.target);
    console.dir(e.currentTarget);
    console.dir(e.currentTarget.children[0].id);
  }
  window.addEventListener('keydown', onEscKeyDown);
}

// закрытие модального окна по клику на кнопку закрытия
function onCloseModal(e) {
  refs.backdropElt.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyDown);
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
