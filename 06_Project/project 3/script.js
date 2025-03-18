const clock = document.getElementById('clock')

setInterval(() => {
    const date = new Date().toLocaleTimeString()
    clock.innerHTML = `<h1 class="text-xl font-semibold pl-5 pt-3"> ${date} </h1>`

}, 1000)