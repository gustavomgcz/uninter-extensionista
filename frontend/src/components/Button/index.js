import './Button.css'

function Button({ children, btnclass }) {
    return (
        <button className={`btn ${btnclass}`}>{children}</button>
    )
}

export default Button