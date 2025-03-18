const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)

    const error = document.getElementById('error')
    const result = document.getElementById('result')

    if (isNaN(height) || height <= 0) {
        error.innerText = 'Please Give a valid height!'
    }
    if (isNaN(weight) || weight <= 0) {
        error.innerText = 'Please Give a valid weight!'
    }

    const BMI = (weight / ((height / 100) ** 2)).toFixed(2)

    result.innerHTML = `<span>${BMI}</span>`
})