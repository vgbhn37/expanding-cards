// alert('테스트');
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
 panel.addEventListener('click', () => {
  removeActive() 
  panel.classList.add('active')
 })
})

/* 액티브 클래스 제거 */
function removeActive() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}