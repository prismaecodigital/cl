import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, disabled = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    const styleEnable = 'border-gray-300 focus:border-ole focus:ring-ole rounded-md shadow-sm';
    const styleDisable = 'rounded-md shadow-sm border-gray-300 bg-gray-100'

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={`${(disabled ? styleDisable : styleEnable)} ${className}`}
            ref={input}
            readOnly={disabled}
            disabled={disabled}
        />
    );
});
