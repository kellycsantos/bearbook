import { useState } from 'react'
import './App.css'

import Input from './components/Input/Input'

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')

  return (
    <>
     <h1>Bearbook</h1>
     <Input tipo="text" placeholder="email@jmail.com" />
     <Input tipo="password" placeholder="******" />
     <Input tipo="button" placeholder="******" dado="Login"/>
    </>
  )
}

export default App
