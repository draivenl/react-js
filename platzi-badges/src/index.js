import React from 'react'
import ReactDom from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
import './global.css'

import Badges from "./pages/Badges";

const container = document.getElementById('app')

ReactDom.render(
    <Badges />, 
    container
)