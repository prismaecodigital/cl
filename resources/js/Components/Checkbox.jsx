export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-ole shadow-sm focus:ring-ole ' +
                className
            }
        />
    );
}
