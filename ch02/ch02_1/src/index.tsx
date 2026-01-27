import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')

root.render(pVirtualDOM)
