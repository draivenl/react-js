import React from 'react'
import ReactDom from 'react-dom'

const nombre = 'Lisandro'
const profesion = 'Ingeniero de Sistemas'

const elementJSX = 
<div>
    <h1>
        <i>Hola</i> soy {nombre}
    </h1>
    <p>Soy {profesion}</p>
</div>

// Alternativa para agegar el elemento no con JSX sino con React
const element = React.createElement(
    'div', 
    {},
    React.createElement('h1', {}, React.createElement('i', {}, 'Hola'), ` soy ${nombre}`),
    React.createElement('p', {}, `soy ${profesion}`)
)

const container = document.getElementById('app')

// ReactDom.render(element, container)
ReactDom.render(elementJSX, container)