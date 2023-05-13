let isLight = true

const html = document.documentElement
const themeToggle = document.getElementById('theme-toggle')

const sun = '<i class="bx bxs-sun bx-md"></i>'
const moon = '<i class="bx bxs-moon bx-md"></i>'

document.addEventListener('DOMContentLoaded', _ => {
    themeToggle.innerHTML = moon
    html.setAttribute('data-theme', 'dark')
})

themeToggle.addEventListener('click', e => {
    e.preventDefault()
    isLight = !isLight
    html.setAttribute('data-theme', isLight ? 'dark' : 'light')
    themeToggle.innerHTML = isLight ? moon : sun
})