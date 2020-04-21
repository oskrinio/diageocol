import { useState, useCallback, useEffect } from 'react'

const logincustom = ({ renderInput, identifierPlaceholder, registerSubmitter }) => {
    // The component receives 3 props:
    // - renderInput is a function that returns the same Input component used by the login app, defined in styleguide.
    //   It receives an object with three named parameters, trivially used by Inputs with react: value, onChange, placeholder.
    //   When "onChange" is called, the login app clears the "email is invalid" error, if it exists.
    // - identifierPlaceholder is the value of the configuration "identifierPlaceholder" defined in the Store Front. It has a
    //   fallback to the value of the configuration "emailPlaceholder".
    // - registerSubmitter is a function that receives your async callback function defined in this file. Your callback will be called
    //   when the user submits the form.

    // This code controls the state of the rendered Input component.
    const [inputValue, setInputValue] = useState('')
    const onChangeInput = useCallback(e => setInputValue(e.target.value), [
        setInputValue,
    ])

    // This callback function (onSubmit) should return the resolved email. In the example below, it adds `@email.com` to the current
    // value in the Input component (eg. "john" would be resolved to "john@email.com").
    const onSubmit = useCallback(async () => {
        const email = `${inputValue}@email.com`
        return email
    }, [inputValue])

    // This code registers the async callback function you defined in the login app when this component mounts.
    useEffect(() => {
        registerSubmitter(onSubmit)
    }, [registerSubmitter, onSubmit])

    // The component calls "renderInput" and renders its result.
    return renderInput({
        value: inputValue,
        onChange: onChangeInput,
        placeholder: identifierPlaceholder,
    })
}

export default logincustom