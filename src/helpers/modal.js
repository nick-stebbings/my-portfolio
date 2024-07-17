export function toggleModal() {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  document.body.classList.toggle('modal-active');
  document.querySelector('#projects').scrollIntoView();
}

document.addEventListener('DOMContentLoaded', () => {
  document.title = 'Nick Stebbings - Portfolio for Full Stack Development';

  var openmodal = document.querySelectorAll('.modal-open');
  for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function (event) {
      event.preventDefault();
      toggleModal();
    });
  }

  const overlay = document.querySelector('.modal-overlay');
  overlay && overlay.addEventListener('click', toggleModal);

  var closemodal = document.querySelectorAll('.modal-close');
  for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal);
  }

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ('key' in evt) {
      isEscape = evt.key === 'Escape' || evt.key === 'Esc';
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
      toggleModal();
    }
  };
});
