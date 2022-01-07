import { useState } from 'react'
import './App.css'
import MenuIcone from './Components/MenuIcone'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <MenuIcone/>
    </div>
  )
}

export default App
