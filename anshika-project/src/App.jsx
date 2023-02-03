import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/navbar'
import Footer from './componets/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Anshika Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
