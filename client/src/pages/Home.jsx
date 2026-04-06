import {Link} from 'react-router-dom'

function Home() {
    return (
        <main className="min-h-screen bg-gray-950 text-white flex items-center">
            <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-blue-500">Matthew Tindogan</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
                        Web Developer & Computer Science Student
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
                        Born in the Philippines, raised across Africa, now studying Computer Science
                        at Okanagan College in Canada. I build clean, functional web experiences.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 flex-wrap mb-8">
                        <a
                            href="/matthew-tindogan-resume.pdf"
                            download
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium
                        transition-colors"
                        >
                            Download Resume
                        </a>
                        <Link
                            to="/contact"
                            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/TrainerBlu3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/matthew-tindogan-0a1441286/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src="/profile.png"
                        alt="Matthew Tindogan"
                        className="w-64 h-64 rounded-full object-cover border-4 border-blue-500"
                    />
                </div>
            </div>
        </main>
    )
}

export default Home