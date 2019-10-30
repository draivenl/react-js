import React from 'react'
import ReactDom from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
import './global.css'

import Badge from "./components/Badge";

const container = document.getElementById('app')

ReactDom.render(
    <Badge 
        name='Lisandro' 
        lastName='G&oacute;mez' 
        jobTitle='FullStack Engineer' 
        twitter='lgomezo' 
        avatar='https://s.gravatar.com/avatar/acc8c5d53c0eddd70332fa11c828665f?s=80'
    />, 
    container
)