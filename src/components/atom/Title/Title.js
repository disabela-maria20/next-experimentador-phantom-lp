function Title({ titulo, extraclass }) {
    return (
        <h1 className={`tm:text-31 md:text-55 leading-title ${extraclass}`}>
            {titulo}
        </h1>
    )
}

export default Title
