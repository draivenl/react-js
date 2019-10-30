import React from 'react'
import ReactDom from 'react-dom'

const name = 'Lisandro'

const elementJSX = <h1><i>Hola</i> {name}</h1>
// Alternativa para agegar el elemento no con JSX sino con React

const element = React.createElement('a', {href: 'http://platzi.com', target: '_blank'}, `Hola ${name}, clic para ir a Platzi`)

const container = document.getElementById('app')

ReactDom.render(element, container)
// ReactDom.render(elementJSX, container)