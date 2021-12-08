function openModal() {
  document.getElementById('btn')
  document.getElementById('modal').classList.toggle('vis')
  document.getElementById('fade').classList.toggle('vis')
}

function closeModal() {
  document.getElementById('close')
  close()
  function close() {
    document.getElementById('fade').classList.toggle('vis')
    document.getElementById('modal').classList.toggle('vis')
  }
}

function openMenu() {
  document.getElementById('menu').classList.toggle('color')
  document.getElementById('menuopen').classList.toggle('menu-vis')
  document.getElementById('info').classList.toggle('info-hide')
}