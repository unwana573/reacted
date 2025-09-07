import { useState } from 'react'
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default App