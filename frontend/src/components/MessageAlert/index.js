import './MessageAlert.css'

function MessageAlert({ message, status}) {
    return (
        <div className={`container ${status}`}>
            {message}
        </div>
    )
}

export default MessageAlert