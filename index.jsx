import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'
import './styles/index.css'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

ReactDom.render(<GeistProvider themeType='dark'>
    <CssBaseline />
    <App />
  </GeistProvider>, document.getElementById('app'))
