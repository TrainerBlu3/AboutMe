import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<div className="pt-20 p-8">Home Page</div>} />
                <Route path="/about" element={<div className="pt-20 p-8">About Page</div>} />
                <Route path="/projects" element={<div className="pt-20 p-8">Projects Page</div>} />
                <Route path="/contact" element={<div className="pt-20 p-8">Contact</div>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App