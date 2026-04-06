import { useRef, useState} from "react"
import emailjs from '@emailjs/browser'
import useForm from '../hooks/useForm.js'

function Contact() {
    const formRef = useRef(null)
    const {values, errors, handleChange, validate, setErrors, reset} = useForm({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newErrors = validate()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        setStatus('sending')
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus('success')
                reset()
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <main className="min-h-screen bg-gray-950 text-white">
            <div className="max-w-2xl mx-auto px-4 py-32">

                <h1 className="text-4xl font-bold text-center mb-16">
                    Contact <span className="text-blue-500">Me</span>
                </h1>

                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Subject *</label>
                        <input
                            type="text"
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Message *</label>
                        <textarea
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            rows="5"
                            maxLength="450"
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
                        />
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && <p className="text-green-400 text-center">Message sent successfully!</p>}
                    {status === 'error' &&
                        <p className="text-red-400 text-center">Something went wrong. Please try again.</p>}

                </form>
            </div>
        </main>
    )
}

export default Contact