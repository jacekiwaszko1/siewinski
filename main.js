'use strict';
// Parametr ?poster można łączyć z innymi parametrami i kotwicą strony.
const dialog = document.querySelector('#poster-dialog');
const closeButton = document.querySelector('#close-poster');
let opener = null;
function syncPoster() {
  const shouldOpen = new URL(location.href).searchParams.has('poster');
  if (shouldOpen && !dialog.open) {
    opener = document.activeElement;
    dialog.showModal();
    document.body.classList.add('modal-open');
  } else if (!shouldOpen && dialog.open) {
    dialog.close();
  }
}
function closePoster() {
  const url = new URL(location.href);
  url.searchParams.delete('poster');
  history.replaceState(null, '', url);
  if (dialog.open) dialog.close();
}
document.querySelectorAll('[data-poster]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const url = new URL(location.href);
    if (!url.searchParams.has('poster')) {
      url.searchParams.set('poster', '');
      history.pushState(null, '', url);
    }
    syncPoster();
  });
});
closeButton.addEventListener('click', closePoster);
dialog.addEventListener('cancel', event => { event.preventDefault(); closePoster(); });
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closePoster();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (opener instanceof HTMLElement) opener.focus({preventScroll:true});
});
window.addEventListener('popstate', syncPoster);
syncPoster();
