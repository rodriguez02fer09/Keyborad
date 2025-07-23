import React from 'react'
import './App.scss'
import Layout from './components/Layout/Layout'
import {ContextProvider} from './context/AppContext'

const App = () => {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  )
}
export default App
