import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './myComponents/myComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <MyComponents />
  </>
  )
}

export default App
