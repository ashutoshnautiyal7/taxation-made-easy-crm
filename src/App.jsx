import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CustomKanban } from './DragAndDrop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomKanban/>
    </>
  )
}

export default App
