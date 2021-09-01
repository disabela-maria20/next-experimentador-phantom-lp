function Paragraph({ paragrafo, extraclass}) {
    return (
        <p className={`tm:text-15 md:text-18 leading-paragraph ${extraclass}`}>
            {paragrafo}
        </p>
    )
}

export default Paragraph
