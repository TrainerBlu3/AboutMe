import {Link} from 'react-router-dom'

function NotFound(){
    return(
        <main className="min-h-screen bg-gray-950 text-white flex items-center">
            <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-col items-center gap-12">
                <h1 className="text-4xl font-bold text-center text-brand">
                    404
                </h1>
                <h2 className="text-4xl font-bold text-center text-white">
                    This page does not exist yet
                </h2>

                <Link
                    to="/"
                    className="border border-brand text-brand hover:bg-brand hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Home
                </Link>
            </div>
        </main>
    )
}

export default NotFound