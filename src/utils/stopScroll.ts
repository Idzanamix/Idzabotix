export function stopScroll() {
  const overflow = 100
  document.body.style.overflowY = 'hidden'
  document.body.style.marginTop = `${overflow}px`
  document.body.style.height = window.innerHeight + overflow + "px"
  document.body.style.paddingBottom = `${overflow}px`
  window.scrollTo(0, overflow)
}
