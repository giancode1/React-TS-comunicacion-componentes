import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { SizeSelector } from './components/SizeSelector';

function App() {
  const [count, setCount] = useState(0)
  const [currentSize, setcurrentSize] = useState('none')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <h3>Talla seleccionada: {currentSize}</h3>

        <SizeSelector 
          selectedSize={ currentSize } 
          // onSizeChange={ (size) => setcurrentSize(size) }  //lo mismo qeu abajo
          onSizeChange={ setcurrentSize } 
        />
        

      </header>
    </div>
  )
}

export default App
