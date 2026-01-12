import './FormField.css'

function FormField({ type = 'text', label, placeholder, value, changed, required = true }) {
    return (
        <div className='field'>
            <label>{label}</label>
            {type === 'textarea' ?
                <textarea
                    name={label}
                    value={value}
                    onChange={e => changed(e.target.value)}
                    placeholder={placeholder}
                    rows={7}
                />
                :
                <input
                    type={type}
                    value={value}
                    onChange={e => changed(e.target.value)}
                    required={required}
                    placeholder={placeholder}
                />
            }
        </div>
    )
}

export default FormField