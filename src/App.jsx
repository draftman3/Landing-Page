import { useState } from 'react'
import './App.css'
import TopBar from './section/TopBar'
import NavBar from './section/NavBar'
import Content from './section/Content'
import About from './content/About'
import Product from './content/Product'
import Building from './content/Building'

function App() { 

  return (
    <div>
      <TopBar />
      <NavBar />
      <Content />
      <About />
      <Product />
      <Building />
    </div>
  )
}

export default App
