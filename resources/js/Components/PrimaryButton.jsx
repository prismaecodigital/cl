export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-ole border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-oleDarken focus:bg-oleDarken active:bg-oleDarken focus:outline-none focus:ring-2 focus:ring-oleLighter focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
