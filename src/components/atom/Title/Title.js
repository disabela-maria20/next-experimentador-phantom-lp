function Title({ titulo, extraclass }) {
    return (
        <h2 className={`font-bold tm:text-31 md:text-55 leading-title ${extraclass}`}>
            {titulo}
        </h2>
    )
}

export default Title
