const element = document.createElement('div')

element.innerHTML = '<i>Hola</i>'
element.innerHTML += '&nbsp;Mundo'

const container = document.getElementById('app')

container.appendChild(element)