let isLight = true
const html = document.documentElement
const switchTheme = document.getElementById('theme-toggle')
const os_default = '<i class="bx bxs-moon bx-md"></i>'
const sun = '<i class="bx bxs-sun bx-md"></i>'
const moon = '<i class="bx bxs-moon bx-md"></i>'

document.addEventListener('DOMContentLoaded', () => {
  switchTheme.innerHTML = os_default
  html.setAttribute('data-theme', 'dark')
})

switchTheme.addEventListener('click', (e)=> {
  e.preventDefault()
  isLight = !isLight
  html.setAttribute('data-theme', isLight? 'dark':'light')
  switchTheme.innerHTML = isLight? moon : sun
})