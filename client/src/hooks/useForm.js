import { useState } from 'react'

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    function handleChange(e){
        const { name, value } = e.target
        setValues(prev => ({  ...prev, [name]: value }))
        if(errors[name]) {
            setErrors(prev => ({ ...prev, [name]: ''}))
        }
    }

    function validate() {
        const newErrors = {}
        if (!values.name.trim()) newErrors.name = 'Name is required'
        if (!values.email.trim()) newErrors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) newErrors.email = 'Invalid email address'
        if (!values.subject.trim()) newErrors.subject = 'Subject is required'
        if (values.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'
        return newErrors
    }

    function reset(){
        setValues(initialValues)
        setErrors({})
    }

    return {values, errors, handleChange, validate, setErrors, reset}
}

export default useForm