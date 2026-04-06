import App from "../App.jsx";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-gray-400">
                    ©{new Date().getFullYear()}. Matthew Tindogan. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer