window.onload = () => {
    for (let i of document.querySelectorAll('.box-row>img')) {
        const div = document.createElement('div')
        div.classList.add('box-item')
        i.parentElement.appendChild(div)
        div.appendChild(i)
    }

    for (let i of document.querySelectorAll('.box-row')) {
        const images = i.querySelectorAll('img')
        const firstElement = images[0]
        const firstWidth = firstElement.naturalWidth
        const firstHeight = firstElement.naturalHeight
        firstElement.parentElement.style.width = '100%'
        for (let i = 1; i < images.length; i++) {
            const e = images[i]
            const a = e.naturalHeight / firstHeight
            const b =
                (e.naturalWidth * (firstHeight / e.naturalHeight)) / firstWidth
            e.parentElement.style.width = b * 100 + '%'
        }
    }
}
