const button = document.querySelector('button');
const close = document.querySelector('dialog button');
const modal = document.querySelector('dialog');

button.onclick = function () {
    modal.showModal()
}

close.onclick = function () {
    modal.close()
}