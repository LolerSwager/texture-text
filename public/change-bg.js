let time = 1
const amoutOfImages = 19

const interval = setInterval(() => {
    if (time <= amoutOfImages - 1) {
        time++
        const pre = document.getElementById("pre")
        pre.classList.add(`fontStyle-${time}`)
        pre.classList.remove(`fontStyle-${time - 1}`)
    } else {
        time = 1
        pre.classList.add(`fontStyle-1`)
        pre.classList.remove(`fontStyle-${amoutOfImages}`)
    }
}, 1000)
