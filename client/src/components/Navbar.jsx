import {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full bg-gray-900 backdrop-blur-md text-white z-50 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    Matthew <span
                    className="bg-gradient-to-l from-brand-gold to-red-500 bg-clip-text text-transparent">Tindogan</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    <Link to="/" className="hover:text-brand transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-brand transition-colors">About</Link>
                    <Link to="/projects" className="hover:text-brand transition-colors">Projects</Link>
                    <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
                </nav>

                {/* Hamburger Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white "></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-gray-900 px-4 py-4 flex flex-col gap-4 border-t border-white/10">
                    <Link to="/" onClick={() => setIsOpen(false)}
                          className="hover:text-brand transition-colors">Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}
                          className="hover:text-brand transition-colors">About</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}
                          className="hover:text-brand transition-colors">Projects</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}
                          className="hover:text-brand transition-colors">Contact</Link>
                </nav>
            )}
        </header>
    )
}

export default Navbar