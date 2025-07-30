import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("No se encontró el elemento con id 'root'")
}

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
