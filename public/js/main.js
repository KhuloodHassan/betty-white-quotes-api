const random = document.querySelector('.random-quote')
const quote = document.querySelector('blockquote p')
const author = document.querySelector('blockquote cite')

document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('https://bettywhite.cyclic.app/api/random')
    const data = await res.json()
    quote.textContent = `"${data.quote}"`
    author.textContent = `-${data.author}`
})

random.addEventListener('click', async () => {
    const res = await fetch('https://bettywhite.cyclic.app/api/random')
    const data = await res.json()
    quote.textContent = `"${data.quote}"`
    author.textContent = `-${data.author}`
})