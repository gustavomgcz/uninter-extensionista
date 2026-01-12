import './Action.css'

function Action({id, title, children, imgSrc, imgAlt, invert }) {
    return (
        <section id={id}>
            <h1 className='actions-title'>{title}</h1>
            <div className={`actions-presentation ${invert ? invert : ""}`}>
                <div className='actions-text-container'>
                    {children}
                </div>
                <div className='actions-image-container'>
                    <img className='actions-image' src={imgSrc} alt={imgAlt} />
                </div>
            </div>
        </section>
    )
}

export default Action