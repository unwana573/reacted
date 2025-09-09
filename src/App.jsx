import { useState } from 'react'
import Navbar from './compnents/navbar/navbar'
import Footer from './compnents/footer/footer'
import Home from './pages/Home'
import About from './pages/About'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Choose from './pages/Choose'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Rootlayout from './layout/Rootlayout'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="choose" element={<Choose />} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    <Footer/>
    </>
  )
}

export default App