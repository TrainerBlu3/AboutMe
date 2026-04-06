import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-950 flex flex-col">
                <Navbar/>
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/contact" element={<div className="pt-20 p-8">Contact</div>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App