import './Button.scss'

function Button(props) {
    return(
        <button className={props.classButton}>{props.text} <img src={props.image} alt="" /></button>
    )
}

export default Button