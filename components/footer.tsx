const Footer = (props: {footer: string}) => {
    return (
        <div className="text-center h6 my-4">
            <div>{props.footer}</div>
        </div>
    )
}

export default Footer;