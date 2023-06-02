import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Router from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Link to="/">home page</Link>
      &nbsp;
      <Link to="/about">about page</Link>
      <Router />
    </div>
  )
}

export default App
