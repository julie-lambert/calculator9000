import { useState } from 'react'
import './App.css'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Title text="Calculator 9000"/>
    </>
  )
}

export default App
