import React from 'react'
import ReactDom from 'react-dom'

const element = <h1><i>Hola</i> Mundo</h1>

const container = document.getElementById('app')

ReactDom.render(element, container)